import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPages } from 'src/app/interfaces/IPages';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree-pages',
  templateUrl: './tree-pages.component.html',
  styleUrls: ['./tree-pages.component.scss'],
})
export class TreePagesComponent implements OnInit {
  AllPages: IPages[] = [];
  /**
   * paginas que se estan mostrando
   */
  pages: Array<IPages> = [];

  /**
   * nivel del arbol en el que se encuentra.
   */
  level: IPages | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<IPages[]>(environment.UrlGetHomePage).subscribe((data) => {
      console.log(data);
      this.AllPages = data;
      this.pages = this.AllPages;
    });
  }

  ngOnInit(): void {}

  redirect(page: IPages) {
    if (!page.children || page.children.length == 0) {
      window.open(page.domainURI);
    } else {
      this.pages = page.children;
      this.level = page;
    }
  }

  back() {
    if (this.level) {
      //this.pages = this.AllPages.filter((item) => item.root == this.level?.);
      this.pages = this.AllPages;
      this.level = null;
    }
  }
}
