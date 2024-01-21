import { Injectable } from '@nestjs/common';
import { CreateFootballTeamDto } from './dto/create-football-team.dto';
import { UpdateFootballTeamDto } from './dto/update-football-team.dto';
import { PrismaService } from 'src/prisma.service';
import { FootballTeamEntity } from './entities/football-team.entity';
import { FindAllFootballTeamsDto } from './dto/find-footbal-teams.dto';

@Injectable()
export class FootballTeamsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateFootballTeamDto): Promise<FootballTeamEntity> {
    const {
      nameTm,
      nameRu,
      win,
      draw,
      loss,
      goalsScored,
      goalsAgainst,
      points,
      imagePath,
      championshipId,
    } = data;

    return this.prismaService.footballTeams.create({
      data: {
        nameTm,
        nameRu,
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

  async findAll(query: FindAllFootballTeamsDto): Promise<FootballTeamEntity[]> {
    return this.prismaService.footballTeams.findMany(query);
  }

  async findOne(id: string): Promise<FootballTeamEntity> {
    return this.prismaService.footballTeams.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateFootballTeamDto,
  ): Promise<FootballTeamEntity> {
    const {
      nameTm,
      nameRu,
      win,
      draw,
      loss,
      goalsScored,
      goalsAgainst,
      points,
      imagePath,
      championshipId,
    } = data;

    return this.prismaService.footballTeams.update({
      where: { id },
      data: {
        nameTm,
        nameRu,
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

  async remove(id: string): Promise<FootballTeamEntity> {
    return this.prismaService.footballTeams.delete({ where: { id } });
  }
}
