import { Module } from '@nestjs/common';
import { ControllersModule } from './controller/controllers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ControllersModule
  ],

})
export class AppModule {}
