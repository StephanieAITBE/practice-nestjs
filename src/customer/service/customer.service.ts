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

  create(customer: CustomerDTO): Promise<CustomerDTO> {
    return this.customerRepository.save(customer);
  }

  findAll(): Promise<CustomerDTO[]> {
    return this.customerRepository.find();
  }
}
