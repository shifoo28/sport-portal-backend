import { Injectable } from '@nestjs/common';
import { CreateTrainerRatingDto } from './dto/create-trainer-rating.dto';
import { UpdateTrainerRatingDto } from './dto/update-trainer-rating.dto';
import { FindAllTrainerRatingsDto } from './dto/find-trainer-ratings.dto';
import { PrismaService } from 'src/prisma.service';
import { TrainerRatingEntity } from './entities/trainer-rating.entity';

@Injectable()
export class TrainerRatingsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTrainerRatingDto): Promise<TrainerRatingEntity> {
    const { userId, trainerId, rating, comment } = data;

    return this.prismaService.trainerRatings.create({
      data: {
        user: { connect: { id: userId } },
        trainer: { connect: { id: trainerId } },
        rating: +rating,
        comment,
      },
    });
  }

  async findAll(
    query: FindAllTrainerRatingsDto,
  ): Promise<TrainerRatingEntity[]> {
    return this.prismaService.trainerRatings.findMany(query);
  }

  async findOne(id: string): Promise<TrainerRatingEntity> {
    return this.prismaService.trainerRatings.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateTrainerRatingDto,
  ): Promise<TrainerRatingEntity> {
    const { trainerId, rating, comment } = data;

    return this.prismaService.trainerRatings.update({
      where: { id },
      data: {
        trainer: trainerId && { connect: { id: trainerId } },
        rating: rating && +rating,
        comment,
      },
    });
  }

  async remove(id: string): Promise<TrainerRatingEntity> {
    return this.prismaService.trainerRatings.delete({ where: { id } });
  }
}
