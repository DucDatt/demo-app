import { Module } from '@nestjs/common';
import { InMemAnalyticsService } from './in-mem-analytics/in-mem-analytics.service';
import { UsecaseService } from './base/usecase/usecase.service';
import { InteropService } from './base/interop/interop.service';
import { AnalyticsController } from './analytics.controller';

@Module({
  providers: [{
    provide: 'AnalyticsRepository',
    useClass: InMemAnalyticsService
  }, {
    provide: 'AnalyticsUseCase',
    useClass: UsecaseService
  }, {
    provide: 'AnalyticsInterop',
    useClass: InteropService
  }],
  controllers: [AnalyticsController],
  exports: ['AnalyticsRepository', 'AnalyticsUseCase', 'AnalyticsInterop']
})
export class AnalyticsModule {}
