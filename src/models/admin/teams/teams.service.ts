import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { FindAllTeamsDto } from './dto/find-team.dto';
import { PrismaService } from 'src/prisma.service';
import { TeamEntity } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTeamDto): Promise<TeamEntity> {
    const {
      nameTm,
      nameRu,
      played,
      win,
      draw,
      loss,
      goalsScored,
      goalsAgainst,
      points,
      imagePath,
      championshipId,
    } = data;

    return this.prismaService.teams.create({
      data: {
        nameTm,
        nameRu,
        played: +played,
        win: +win,
        draw: +draw,
        loss: +loss,
        goalsScored: +goalsScored,
        goalsAgainst: +goalsAgainst,
        points: +points,
        imagePath,
        chamionship: { connect: { id: championshipId } },
      },
    });
  }

  async findAll(query: FindAllTeamsDto): Promise<TeamEntity[]> {
    return this.prismaService.teams.findMany(query);
  }

  async findOne(id: string): Promise<TeamEntity> {
    return this.prismaService.teams.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateTeamDto): Promise<TeamEntity> {
    const {
      nameTm,
      nameRu,
      played,
      win,
      draw,
      loss,
      goalsScored,
      goalsAgainst,
      points,
      imagePath,
      championshipId,
    } = data;

    return this.prismaService.teams.update({
      where: { id },
      data: {
        nameTm,
        nameRu,
        played: played && +played,
        win: win && +win,
        draw: draw && +draw,
        loss: loss && +loss,
        goalsScored: goalsScored && +goalsScored,
        goalsAgainst: goalsAgainst && +goalsAgainst,
        points: points && +points,
        imagePath,
        chamionship: championshipId && { connect: { id: championshipId } },
      },
    });
  }

  async remove(id: string): Promise<TeamEntity> {
    return this.prismaService.teams.delete({ where: { id } });
  }
}
