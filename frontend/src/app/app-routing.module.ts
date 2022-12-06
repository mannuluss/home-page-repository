import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarImagenesComponent } from './components/gestionar-imagenes/gestionar-imagenes.component';
import { TreePagesComponent } from './components/tree-pages/tree-pages.component';

const routes: Routes = [
  {
    path: '',
    component: TreePagesComponent,
  },
  {
    path: 'admin/gestionar-imagenes',
    component: GestionarImagenesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
