"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseService = void 0;
const common_1 = require("@nestjs/common");
const analytics_domain_1 = require("../../../domain/analytics.domain");
let UsecaseService = class UsecaseService {
    constructor(analyticsRepository) {
        this.analyticsRepository = analyticsRepository;
    }
    getById(id) {
        return this.analyticsRepository.getById(id);
    }
    getAll() {
        return this.analyticsRepository.getAll();
    }
    getAllWithFilter(filter) {
        return this.analyticsRepository.getAllWithFilter(filter);
    }
    post(analytics) {
        if (analytics.id) {
            const existingAnalytics = this.analyticsRepository.getById(analytics.id);
            if (existingAnalytics) {
                console.log('Analytics entry already exists');
                throw analytics_domain_1.existAnalytics;
            }
        }
        const isPositive = analytics.score >= 0;
        if (!isPositive) {
            console.log('Score must be a positive number');
            throw analytics_domain_1.invalidScore;
        }
        const isNumber = typeof analytics.score === 'number';
        if (!isNumber) {
            console.log('Score must be a number');
            throw analytics_domain_1.invalidScore;
        }
        if (!analytics.gameId || !analytics.playerId) {
            console.log('gameId and playerId are required');
            throw analytics_domain_1.missingRequiredFields;
        }
        if (!analytics.timestamp) {
            analytics.timestamp = new Date();
        }
        return this.analyticsRepository.post(analytics);
    }
    put(analytics) {
        return this.analyticsRepository.put(analytics);
    }
    delete(id) {
        return this.analyticsRepository.delete(id);
    }
    getSummary(filter) {
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
};
exports.UsecaseService = UsecaseService;
exports.UsecaseService = UsecaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AnalyticsRepository')),
    __metadata("design:paramtypes", [Object])
], UsecaseService);
//# sourceMappingURL=usecase.service.js.map