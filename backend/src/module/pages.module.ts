import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pages } from '../models/pages.entity';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';
import { PageService } from '../models/pages.service';

/*@Module({
  imports: [TypeOrmModule.forFeature([Pages])],
  controllers: [AppController],
  providers: [PageService]
})
export class PagesModule {}*/