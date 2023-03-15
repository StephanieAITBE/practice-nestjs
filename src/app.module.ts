import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
// import { HashModule } from './hash/hash.module'
import { CommonModule } from './common/common.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/controller/customer.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    HttpModule,
    CommonModule,
    AuthModule,
    CustomerModule,
  ],
  controllers: [AppController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
