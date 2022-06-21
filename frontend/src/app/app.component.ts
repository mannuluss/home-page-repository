import { Component, HostBinding, OnInit } from '@angular/core';
import { ISocialNetWorks } from 'src/assets/ISocialNetworks';
import { IPages } from './interfaces/IPages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  backgroundImageVar = "assets/Shape.svg"

  redes_sociales: ISocialNetWorks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/andresfelipe.rojassantos/",
      svgicon: "facebook-box"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andres-felipe-rojas-santos-039b06128/",
      svgicon: "linkedin-box"
    }
  ];

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
    },
  ]

  pagesEnable = () => {
    return this.pages.filter((value) => value.enable);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.backgroundImageVar = "assets/Meteor.svg";
  }
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //       'my-star-icon',
  //       sanitizer.bypassSecurityTrustResourceUrl('assets/icons/my-star-icon.svg'));
  // }
}
