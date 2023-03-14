import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum OrderDirection {
  ASC,
  DESC,
}

export class MainPagingDTO {
  @IsNotEmpty()
  @IsNumber()
  page: number;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsString()
  search: string;

  @IsString()
  sort: string;

  @IsString()
  @IsIn(Object.values(OrderDirection))
  order: OrderDirection;
}
