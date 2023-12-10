import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ELangs } from 'src/app.dto';

export class CreateFederationDto implements Prisma.FederationsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP, SVG',
  })
  photo: Express.Multer.File;
  imagePath: string;
  fsports?: Prisma.FederationSportsCreateNestedOneWithoutFederationInput;
  fathlete?: Prisma.FederationAthleteCreateNestedManyWithoutFederationInput;
  ftrainers?: Prisma.FederationTrainersCreateNestedManyWithoutFederationInput;
}

export class FindAllFederationsDto implements Prisma.FederationsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationsOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationsInclude<DefaultArgs>;
}
