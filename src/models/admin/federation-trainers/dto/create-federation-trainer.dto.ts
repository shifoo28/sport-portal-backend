import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationTrainerDto
  implements Prisma.FederationTrainersCreateInput
{
  @ApiProperty() age: number;
  @ApiProperty() job: string;
  @ApiProperty() name: string;
  @ApiProperty() made: string;
  @ApiProperty() rating: number;
  imagePath: string;
  @ApiProperty() experience: number;
  @ApiProperty() birthPlace: string;
  @ApiProperty() sportLevel: string;
  @ApiProperty() federationId: string;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
  federation: Prisma.FederationsCreateNestedOneWithoutFtrainersInput;
}

export class FindAllFederationTrainersDto
  implements Prisma.FederationTrainersFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false, default: 10 }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationTrainersWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationTrainersOrderByWithRelationInput
    | Prisma.FederationTrainersOrderByWithRelationInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationTrainersInclude<DefaultArgs>;
  @ApiProperty({ required: false })
  select?: Prisma.FederationTrainersSelect<DefaultArgs>;
}
