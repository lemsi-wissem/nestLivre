import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LivreService } from './livre.service';
import { Livre } from '../model/livre.entity';
import { Repository } from 'typeorm';

describe('LivreService', () => {
  let service: LivreService;
  let repo: Repository<Livre>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LivreService,
        {
          provide: getRepositoryToken(Livre),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LivreService>(LivreService);
    repo = module.get<Repository<Livre>>(getRepositoryToken(Livre));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all livres', async () => {
    const testLivre: Livre = new Livre();
    jest.spyOn(repo, 'find').mockResolvedValueOnce([testLivre]);
    expect(await service.findAll()).toEqual([testLivre]);
  });

  it('should find one livre', async () => {
    const testLivre: Livre = new Livre();
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(testLivre);
    expect(await service.findOne(1)).toEqual(testLivre);
  });

  it('should create one livre', async () => {
    const testLivre: Livre = new Livre();
    jest.spyOn(repo, 'create').mockReturnValueOnce(testLivre);
    jest.spyOn(repo, 'save').mockResolvedValueOnce(testLivre);
    expect(await service.create(testLivre)).toEqual(testLivre);
  });
});
