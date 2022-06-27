import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pages } from "./pages.entity";

@Injectable()
export class PageService{
    constructor(
        @InjectRepository(Pages)
        private pagesRepository: Repository<Pages>
    ){}

    findAll(): Promise<Pages[]> {
        return this.pagesRepository.find();
    }
}