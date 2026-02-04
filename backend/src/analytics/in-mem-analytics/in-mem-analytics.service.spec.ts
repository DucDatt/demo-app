import { Test, TestingModule } from '@nestjs/testing';
import { InMemAnalyticsService } from './in-mem-analytics.service';

describe('InMemAnalyticsService', () => {
  let service: InMemAnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemAnalyticsService],
    }).compile();

    service = module.get<InMemAnalyticsService>(InMemAnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
