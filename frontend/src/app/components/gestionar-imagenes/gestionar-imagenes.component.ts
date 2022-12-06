import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestionar-imagenes',
  templateUrl: './gestionar-imagenes.component.html',
  styleUrls: ['./gestionar-imagenes.component.scss'],
})
export class GestionarImagenesComponent implements OnInit {
  imagenes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(environment.urlGetImage+"/all").subscribe((data: any) => {
      this.imagenes = data;
    });
  }
}
