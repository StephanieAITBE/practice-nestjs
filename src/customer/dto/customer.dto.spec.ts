import { CustomerDTO } from './customer.dto';

describe('CustomerDto', () => {
  it('should be defined', () => {
    expect(new CustomerDTO()).toBeDefined();
  });
});
