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
exports.InteropService = void 0;
const common_1 = require("@nestjs/common");
let InteropService = class InteropService {
    constructor(analyticsUseCase) {
        this.analyticsUseCase = analyticsUseCase;
    }
    getById(token, id) {
        return this.analyticsUseCase.getById(id);
    }
    post(token, analytics) {
        return this.analyticsUseCase.post(analytics);
    }
    put(token, analytics) {
        return this.analyticsUseCase.put(analytics);
    }
    delete(token, id) {
        return this.analyticsUseCase.delete(id);
    }
    getAll(token, filter) {
        if (filter) {
            return this.analyticsUseCase.getAllWithFilter(filter);
        }
        return this.analyticsUseCase.getAll();
    }
    getSummary(token, filter) {
        return this.analyticsUseCase.getSummary(filter);
    }
};
exports.InteropService = InteropService;
exports.InteropService = InteropService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AnalyticsUseCase')),
    __metadata("design:paramtypes", [Object])
], InteropService);
//# sourceMappingURL=interop.service.js.map