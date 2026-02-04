import { Test, TestingModule } from '@nestjs/testing';
import { InteropService } from './interop.service';

describe('InteropService', () => {
  let service: InteropService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteropService],
    }).compile();

    service = module.get<InteropService>(InteropService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
