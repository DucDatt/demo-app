import { Injectable } from '@nestjs/common';
import { Analytics, AnalyticsFilter, AnalyticsRepository } from "../../domain/analytics.domain";
import { DictionaryInt } from "../../utils/dictonary";

@Injectable()
export class InMemAnalyticsService implements AnalyticsRepository {
    private analytics: DictionaryInt<Analytics>
    private nextId: number = 1;

  constructor() {
      this.analytics = {};
  }
    getById(id: number): Analytics {
        return this.analytics[id];
    }
    post(analytics: Analytics): Analytics {
      // Auto-generate ID if not provided
      if (!analytics.id) {
        analytics.id = this.nextId++;
      }
      return this.analytics[analytics.id] = analytics;
    }
    put(analytics: Analytics): Analytics {
        return this.analytics[analytics.id] = analytics;
    }
    delete(id: number): Analytics {
        delete this.analytics[id];
        return null;
    }
    getAll(): Analytics[] {
      return Object.values(this.analytics);
    }
    getAllWithFilter(filter: AnalyticsFilter): Analytics[] {
      const allAnalytics = Object.values(this.analytics);
      return allAnalytics.filter(analytics => {
        if (filter.gameId && analytics.gameId !== filter.gameId) {
          return false;
        }
        if (filter.playerId && analytics.playerId !== filter.playerId) {
          return false;
        }
        if (filter.minScore !== undefined && analytics.score < filter.minScore) {
          return false;
        }
        if (filter.maxScore !== undefined && analytics.score > filter.maxScore) {
          return false;
        }
        if (filter.startDate && new Date(analytics.timestamp) < new Date(filter.startDate)) {
          return false;
        }
        if (filter.endDate && new Date(analytics.timestamp) > new Date(filter.endDate)) {
          return false;
        }
        return true;
      });
    }
}
