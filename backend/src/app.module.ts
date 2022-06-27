import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pages } from './models/pages.entity';
import { PageService } from './models/pages.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_URL || 'localhost',
      port: Number.parseInt(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PWD || 'toor',
      database: process.env.MYSQL_DB || 'trabajo_spa',
      ssl: (process.env.MYSQL_CRT ? { ca: require("fs").readFileSync(process.env.MYSQL_CRT_FILE) } : null),
      autoLoadEntities: true,//entities: [Pages],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Pages])
  ],
  controllers: [AppController],
  providers: [AppService, PageService],
})
export class AppModule { }
