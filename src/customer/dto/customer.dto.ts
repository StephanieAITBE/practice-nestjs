import { IsNumber, IsString } from 'class-validator';
export class CustomerDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  address: string;

  @IsString()
  is_active: number;
}
