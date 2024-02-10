import { Injectable } from '@nestjs/common';
import { CreateAthleteRatingDto } from './dto/create-athlete-rating.dto';
import { UpdateAthleteRatingDto } from './dto/update-athlete-rating.dto';
import { FindAllAthleteRatingsDto } from './dto/find-athlete-rating.dto';
import { AthleteRatingEntity } from './entities/athlete-rating.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AthleteRatingsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateAthleteRatingDto): Promise<AthleteRatingEntity> {
    const { userId, athleteId, rating, comment } = data;

    return this.prismaService.athleteRatings.create({
      data: {
        user: { connect: { id: userId } },
        athlete: { connect: { id: athleteId } },
        rating: +rating,
        comment,
      },
    });
  }

  async findAll(
    query: FindAllAthleteRatingsDto,
  ): Promise<AthleteRatingEntity[]> {
    return this.prismaService.athleteRatings.findMany(query);
  }

  async findOne(id: string): Promise<AthleteRatingEntity> {
    return this.prismaService.athleteRatings.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateAthleteRatingDto,
  ): Promise<AthleteRatingEntity> {
    const { athleteId, rating, comment } = data;

    return this.prismaService.athleteRatings.update({
      where: { id },
      data: {
        athlete: athleteId && { connect: { id: athleteId } },
        rating: rating && +rating,
        comment,
      },
    });
  }

  async remove(id: string): Promise<AthleteRatingEntity> {
    return this.prismaService.athleteRatings.delete({ where: { id } });
  }
}
