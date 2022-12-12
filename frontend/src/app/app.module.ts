import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './material/material.module';
import { TreePagesComponent } from './components/tree-pages/tree-pages.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSrcPipe } from './pipe/ImageSrc.pipe';
import { GestionarImagenesComponent } from './components/gestionar-imagenes/gestionar-imagenes.component';
import { SafePipe } from './pipe/Safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreePagesComponent,
    GestionarImagenesComponent,
    ImageSrcPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
