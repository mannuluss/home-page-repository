import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ISocialNetWorks } from 'src/assets/ISocialNetworks';
import { environment } from 'src/environments/environment';
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

  pages: Array<IPages> = []

  pagesEnable = () => {
    return this.pages.filter((value) => value.enable);
  }

  constructor(private http: HttpClient) {
    this.http.get<IPages[]>(environment.UrlGetHomePage).subscribe(data => {
      console.log(data)
      data.forEach((item)=>{
        item.pathImg = environment.resource + item.pathImg;
      })
      this.pages = data;
    })
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
