import { Analytics, AnalyticsFilter, AnalyticsRepository } from "../../domain/analytics.domain";
export declare class InMemAnalyticsService implements AnalyticsRepository {
    private analytics;
    private nextId;
    constructor();
    getById(id: number): Analytics;
    post(analytics: Analytics): Analytics;
    put(analytics: Analytics): Analytics;
    delete(id: number): Analytics;
    getAll(): Analytics[];
    getAllWithFilter(filter: AnalyticsFilter): Analytics[];
}
