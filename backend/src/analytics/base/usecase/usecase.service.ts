import { Inject, Injectable } from "@nestjs/common";
import {
  Analytics,
  AnalyticsFilter,
  AnalyticsRepository,
  AnalyticsSummary,
  AnalyticsUseCase,
  existAnalytics,
  invalidScore,
  missingRequiredFields
} from "../../../domain/analytics.domain";

@Injectable()
export class UsecaseService implements AnalyticsUseCase {
  constructor(@Inject('AnalyticsRepository') private analyticsRepository: AnalyticsRepository) {
  }
    getById(id: number): Analytics {
        return this.analyticsRepository.getById(id);
    }
    getAll() {
      return this.analyticsRepository.getAll();
    }
    getAllWithFilter(filter: AnalyticsFilter): Analytics[] {
      return this.analyticsRepository.getAllWithFilter(filter);
    }
    post(analytics: Analytics): Analytics {
        // Check if ID is provided and already exists
        if (analytics.id) {
          const existingAnalytics = this.analyticsRepository.getById(analytics.id);
          if (existingAnalytics) {
            console.log('Analytics entry already exists');
            throw existAnalytics;
          }
        }
        
        // Validate score
        const isPositive = analytics.score >= 0;
        if (!isPositive) {
          console.log('Score must be a positive number');
            throw invalidScore;
        }
        const isNumber = typeof analytics.score === 'number';
        if (!isNumber) {
          console.log('Score must be a number');
            throw invalidScore;
        }
        
        // Validate required fields
        if (!analytics.gameId || !analytics.playerId) {
          console.log('gameId and playerId are required');
          throw missingRequiredFields;
        }
        
        // Set timestamp if not provided
        if (!analytics.timestamp) {
          analytics.timestamp = new Date();
        }
        
        return this.analyticsRepository.post(analytics);
    }
    put(analytics: Analytics): Analytics {
        return this.analyticsRepository.put(analytics);
    }
    delete(id: number): Analytics {
        return this.analyticsRepository.delete(id);
    }
    getSummary(filter?: AnalyticsFilter): AnalyticsSummary {
      const data = filter 
        ? this.analyticsRepository.getAllWithFilter(filter)
        : this.analyticsRepository.getAll();
      
      if (data.length === 0) {
        return {
          total: 0,
          averageScore: 0,
          maxScore: 0,
          minScore: 0,
          totalGames: 0,
          uniquePlayers: 0,
          uniqueGames: 0
        };
      }

      const scores = data.map(a => a.score);
      const uniquePlayers = new Set(data.map(a => a.playerId));
      const uniqueGames = new Set(data.map(a => a.gameId));

      return {
        total: data.length,
        averageScore: scores.reduce((sum, score) => sum + score, 0) / scores.length,
        maxScore: Math.max(...scores),
        minScore: Math.min(...scores),
        totalGames: data.length,
        uniquePlayers: uniquePlayers.size,
        uniqueGames: uniqueGames.size
      };
    }
}
