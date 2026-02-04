import { Test, TestingModule } from '@nestjs/testing';
import { UsecaseService } from './usecase.service';

describe('UsecaseService', () => {
  let service: UsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsecaseService],
    }).compile();

    service = module.get<UsecaseService>(UsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
