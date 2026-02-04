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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemAnalyticsService = void 0;
const common_1 = require("@nestjs/common");
let InMemAnalyticsService = class InMemAnalyticsService {
    constructor() {
        this.nextId = 1;
        this.analytics = {};
    }
    getById(id) {
        return this.analytics[id];
    }
    post(analytics) {
        if (!analytics.id) {
            analytics.id = this.nextId++;
        }
        return this.analytics[analytics.id] = analytics;
    }
    put(analytics) {
        return this.analytics[analytics.id] = analytics;
    }
    delete(id) {
        delete this.analytics[id];
        return null;
    }
    getAll() {
        return Object.values(this.analytics);
    }
    getAllWithFilter(filter) {
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
};
exports.InMemAnalyticsService = InMemAnalyticsService;
exports.InMemAnalyticsService = InMemAnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], InMemAnalyticsService);
//# sourceMappingURL=in-mem-analytics.service.js.map