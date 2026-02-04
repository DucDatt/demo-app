import { Inject, Injectable } from "@nestjs/common";
import { Analytics, AnalyticsFilter, AnalyticsInterop, AnalyticsSummary, AnalyticsUseCase } from "../../../domain/analytics.domain";

@Injectable()
export class InteropService implements AnalyticsInterop {
  constructor(@Inject('AnalyticsUseCase') private analyticsUseCase: AnalyticsUseCase) {
  }
    getById(token: string, id: number): Analytics {
        return this.analyticsUseCase.getById(id);
    }
    post(token: string, analytics: Analytics): Analytics {
        return this.analyticsUseCase.post(analytics);
    }
    put(token: string, analytics: Analytics): Analytics {
        return this.analyticsUseCase.put(analytics);
    }
    delete(token: string, id: number): Analytics {
        return this.analyticsUseCase.delete(id);
    }
    getAll(token: string, filter?: AnalyticsFilter): Analytics[] {
        if (filter) {
            return this.analyticsUseCase.getAllWithFilter(filter);
        }
        return this.analyticsUseCase.getAll();
    }
    getSummary(token: string, filter?: AnalyticsFilter): AnalyticsSummary {
        return this.analyticsUseCase.getSummary(filter);
    }
}
