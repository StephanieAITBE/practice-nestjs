import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerDTO } from '../dto/customer.dto';
import { CustomerService } from '../service/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async create(@Body() customerDTO: CustomerDTO) {
    const customer = await this.customerService.create(customerDTO);
    if (!customer) {
      return 'error in creating todo';
    }
    return 'todo created successfully';
  }

  @Get()
  async findAll() {
    const customers: Array<CustomerDTO> = await this.customerService.findAll();
    return customers;
  }
}
