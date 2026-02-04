import { Analytics, AnalyticsInterop } from "../domain/analytics.domain";
export declare class AnalyticsController {
    private analyticsInterop;
    constructor(analyticsInterop: AnalyticsInterop);
    getSummary(query: any): import("../domain/analytics.domain").AnalyticsSummary;
    getAll(query: any): Analytics[];
    post(analytics: Analytics): Analytics;
    getById(id: number): Analytics;
    put(analytics: Analytics): Analytics;
    delete(id: number): Analytics;
    private buildFilterFromQuery;
}
