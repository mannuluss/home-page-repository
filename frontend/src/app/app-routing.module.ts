import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarImagenesComponent } from './components/gestionar-imagenes/gestionar-imagenes.component';
import { TreePagesComponent } from './components/tree-pages/tree-pages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: TreePagesComponent,
      },
      {
        path: 'admin/gestionar-imagenes',
        component: GestionarImagenesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
