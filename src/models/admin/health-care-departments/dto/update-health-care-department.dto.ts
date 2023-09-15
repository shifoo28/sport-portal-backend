import { PartialType } from '@nestjs/swagger';
import { CreateHealthCareDepartmentDto } from './create-health-care-department.dto';

export class UpdateHealthCareDepartmentDto extends PartialType(CreateHealthCareDepartmentDto) {}
