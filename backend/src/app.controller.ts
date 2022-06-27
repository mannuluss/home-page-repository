import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPages } from './interfaces/IPages';
import { PageService } from './models/pages.service';

@Controller("/api/home")
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly pageService: PageService) { }

  pages: Array<IPages> = [
    {
      id: 0,
      title: "Webmin Dashboard",
      description: "pagina para administrar la maquina virtual de azure",
      domainURI: "https://webmin.feliperojas.me",
      enable: true,
      pathImg: "assets/vmAzure.png"
    },
    {
      id: 0,
      title: "Docker Library",
      description: "pagina de un proyecto de libreria y pagina de compras",
      domainURI: "https://catalog.feliperojas.me",
      enable: true,
      pathImg: "assets/Docker.jpg"
    }
  ]

  @Get("pages")
  async Pages() {
    return await this.pageService.findAll();
  }
}
