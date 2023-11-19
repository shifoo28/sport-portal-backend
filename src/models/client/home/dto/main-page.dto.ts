import { ApiProperty } from '@nestjs/swagger';
import { News, Videos } from '@prisma/client';

export class FindAllLWNewsDto implements News {
  id: string;
  textTm: string;
  textRu: string;
  views: number;
  nameTm: string;
  nameRu: string;
  locationTm: string;
  locationRu: string;
  imagePath: string;
  categoryId: string;
  category?: { nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}
export class FindAllVideoNewsDto implements Videos {
  id: string;
  textTm: string;
  textRu: string;
  views: number;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  videoPath: string;
}
export enum ESection {
  Local = 'Local',
  World = 'World',
  Video = 'Video',
}
export class FindAllHomeNewsDto {
  @ApiProperty({ enum: ESection }) section: ESection;
  @ApiProperty({ required: false }) skip: number;
  @ApiProperty({ required: false, description: 'Default takes 30 records' })
  take: number;
}
