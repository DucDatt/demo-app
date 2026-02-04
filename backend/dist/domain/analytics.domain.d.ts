import { HttpException } from "@nestjs/common";
export interface Analytics {
    id: number;
    gameId: string;
    playerId: string;
    score: number;
    timestamp: Date;
}
export interface AnalyticsFilter {
    gameId?: string;
    playerId?: string;
    minScore?: number;
    maxScore?: number;
    startDate?: Date;
    endDate?: Date;
}
export interface AnalyticsSummary {
    total: number;
    averageScore: number;
    maxScore: number;
    minScore: number;
    totalGames: number;
    uniquePlayers: number;
    uniqueGames: number;
}
export interface AnalyticsRepository {
    getById(id: number): Analytics;
    post(analytics: Analytics): Analytics;
    put(analytics: Analytics): Analytics;
    delete(id: number): Analytics;
    getAll(): Analytics[];
    getAllWithFilter(filter: AnalyticsFilter): Analytics[];
}
export interface AnalyticsUseCase {
    getById(id: number): Analytics;
    post(analytics: Analytics): Analytics;
    put(analytics: Analytics): Analytics;
    delete(id: number): Analytics;
    getAll(): Analytics[];
    getAllWithFilter(filter: AnalyticsFilter): Analytics[];
    getSummary(filter?: AnalyticsFilter): AnalyticsSummary;
}
export interface AnalyticsInterop {
    getById(token: string, id: number): Analytics;
    post(token: string, analytics: Analytics): Analytics;
    put(token: string, analytics: Analytics): Analytics;
    delete(token: string, id: number): Analytics;
    getAll(token: string, filter?: AnalyticsFilter): Analytics[];
    getSummary(token: string, filter?: AnalyticsFilter): AnalyticsSummary;
}
export declare const existAnalytics: HttpException;
export declare const invalidScore: HttpException;
export declare const missingRequiredFields: HttpException;
