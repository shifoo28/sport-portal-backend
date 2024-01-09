import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFederationHealthCareEmployeeDto } from './create-federation-health-care-employee.dto';

export class UpdateFederationHealthCareEmployeeDto extends PartialType(
  CreateFederationHealthCareEmployeeDto,
) {
  @ApiProperty({ required: false }) views?: number;
  @ApiProperty({ required: false }) rating?: number;
}
