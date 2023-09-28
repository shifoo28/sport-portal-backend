import { ApiProperty } from '@nestjs/swagger';

class WhereClause {
  views: number;
  id: string;
  age: number;
  job: string;
  name: string;
  made: string;
  rating: number;
  imagePath: string;
  experience: number;
  birthPlace: string;
  sportLevel: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class FTrainersQueryDto {
  @ApiProperty({ required: false, type: WhereClause }) where?: WhereClause;
}