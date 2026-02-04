"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsModule = void 0;
const common_1 = require("@nestjs/common");
const in_mem_analytics_service_1 = require("./in-mem-analytics/in-mem-analytics.service");
const usecase_service_1 = require("./base/usecase/usecase.service");
const interop_service_1 = require("./base/interop/interop.service");
const analytics_controller_1 = require("./analytics.controller");
let AnalyticsModule = class AnalyticsModule {
};
exports.AnalyticsModule = AnalyticsModule;
exports.AnalyticsModule = AnalyticsModule = __decorate([
    (0, common_1.Module)({
        providers: [{
                provide: 'AnalyticsRepository',
                useClass: in_mem_analytics_service_1.InMemAnalyticsService
            }, {
                provide: 'AnalyticsUseCase',
                useClass: usecase_service_1.UsecaseService
            }, {
                provide: 'AnalyticsInterop',
                useClass: interop_service_1.InteropService
            }],
        controllers: [analytics_controller_1.AnalyticsController],
        exports: ['AnalyticsRepository', 'AnalyticsUseCase', 'AnalyticsInterop']
    })
], AnalyticsModule);
//# sourceMappingURL=analytics.module.js.map