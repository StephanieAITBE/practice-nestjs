import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDTO } from 'src/customer/dto/customer.dto';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  create(customer: CustomerDTO): CustomerDTO {
    this.customerRepository.save(customer);
    return customer;
  }

  findAll(): Promise<CustomerDTO[]> {
    return this.customerRepository.find();
  }
}
