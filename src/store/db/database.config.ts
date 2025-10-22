import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './database.module';

@Module({
  imports: [
    // Import database modules or configurations here
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE.POSTGRES.HOST'),
        port: configService.get<number>('DATABASE.POSTGRES.PORT'),
        username: configService.get<string>('DATABASE.POSTGRES.USERNAME'),
        password: configService.get<string>('DATABASE.POSTGRES.PASSWORD'),
        database: configService.get<string>('DATABASE.POSTGRES.NAME'),
        entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseConfig {}
