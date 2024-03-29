import { Injectable } from '@nestjs/common';
import { FindAllFederationsDto } from 'src/models/admin/federations/dto/find-federation.dto';
import { FederationsEntity } from 'src/models/admin/federations/entities/federation.entity';
import { FederationsService } from 'src/models/admin/federations/federations.service';
import { strToObj } from 'src/tools/strToObj';

@Injectable()
export class FederationPageService {
  constructor(private readonly federation: FederationsService) {}

  async findAllFederationSports(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include } = query;

    return this.federation.findAll({
      skip: skip && +skip,
      take: take && +take,
      where: where ? strToObj(where) : undefined,
      orderBy: { fsports: { createdAt: 'asc' } },
      include: include ? strToObj(include) : { fsports: true },
    });
  }

  async findAllFederationTrainers(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include } = query;

    return this.federation.findAll({
      skip: skip && +skip,
      take: take && +take,
      where: where ? strToObj(where) : undefined,
      orderBy: { ftrainers: { _count: 'desc' } },
      include: include ? strToObj(include) : { ftrainers: true },
    });
  }

  async findAllFederationAthletes(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include } = query;

    return this.federation.findAll({
      skip: skip && +skip,
      take: take && +take,
      where: where ? strToObj(where) : undefined,
      orderBy: { fathlete: { _count: 'desc' } },
      include: include ? strToObj(include) : { fathlete: true },
    });
  }
}
