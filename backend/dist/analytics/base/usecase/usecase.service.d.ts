import { Analytics, AnalyticsFilter, AnalyticsRepository, AnalyticsSummary, AnalyticsUseCase } from "../../../domain/analytics.domain";
export declare class UsecaseService implements AnalyticsUseCase {
    private analyticsRepository;
    constructor(analyticsRepository: AnalyticsRepository);
    getById(id: number): Analytics;
    getAll(): Analytics[];
    getAllWithFilter(filter: AnalyticsFilter): Analytics[];
    post(analytics: Analytics): Analytics;
    put(analytics: Analytics): Analytics;
    delete(id: number): Analytics;
    getSummary(filter?: AnalyticsFilter): AnalyticsSummary;
}
