import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/Local.service';
import { ISocial, ISocialNetWorks } from 'src/assets/ISocialNetworks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  redes_sociales: ISocialNetWorks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/andresfelipe.rojassantos/',
      svgicon: 'facebook',
    },
    /*{
      name: 'GitHub',
      url: 'https://www.linkedin.com/in/andres-felipe-rojas-santos-039b06128/',
      svgUrl: 'assets/github.svg',
    },*/
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andres-felipe-rojas-santos-039b06128/',
      svgicon: 'linkedin',
    },
  ];
  constructor(public local: LocalService) {}

  ngOnInit() {}

  redirect(item: ISocial) {
    window.open(item.url);
  }
}
