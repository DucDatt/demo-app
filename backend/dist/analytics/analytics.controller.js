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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsInterop) {
        this.analyticsInterop = analyticsInterop;
    }
    getSummary(query) {
        const filter = this.buildFilterFromQuery(query);
        return this.analyticsInterop.getSummary('token', filter);
    }
    getAll(query) {
        const filter = this.buildFilterFromQuery(query);
        return this.analyticsInterop.getAll('token', filter);
    }
    post(analytics) {
        return this.analyticsInterop.post('token', analytics);
    }
    getById(id) {
        return this.analyticsInterop.getById('token', id);
    }
    put(analytics) {
        return this.analyticsInterop.put('token', analytics);
    }
    delete(id) {
        return this.analyticsInterop.delete('token', id);
    }
    buildFilterFromQuery(query) {
        const filter = {};
        if (query.gameId) {
            filter.gameId = query.gameId;
        }
        if (query.playerId) {
            filter.playerId = query.playerId;
        }
        if (query.minScore) {
            filter.minScore = Number(query.minScore);
        }
        if (query.maxScore) {
            filter.maxScore = Number(query.maxScore);
        }
        if (query.startDate) {
            filter.startDate = new Date(query.startDate);
        }
        if (query.endDate) {
            filter.endDate = new Date(query.endDate);
        }
        if (Object.keys(filter).length === 0) {
            return undefined;
        }
        return filter;
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Get)('summary'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "post", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "delete", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, common_1.Controller)('/analytics'),
    __param(0, (0, common_1.Inject)('AnalyticsInterop')),
    __metadata("design:paramtypes", [Object])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map