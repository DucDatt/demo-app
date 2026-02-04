import { Analytics, AnalyticsFilter, AnalyticsInterop, AnalyticsSummary, AnalyticsUseCase } from "../../../domain/analytics.domain";
export declare class InteropService implements AnalyticsInterop {
    private analyticsUseCase;
    constructor(analyticsUseCase: AnalyticsUseCase);
    getById(token: string, id: number): Analytics;
    post(token: string, analytics: Analytics): Analytics;
    put(token: string, analytics: Analytics): Analytics;
    delete(token: string, id: number): Analytics;
    getAll(token: string, filter?: AnalyticsFilter): Analytics[];
    getSummary(token: string, filter?: AnalyticsFilter): AnalyticsSummary;
}
