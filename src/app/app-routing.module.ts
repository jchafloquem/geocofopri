import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'mapa',
    loadChildren:() => import('./mapa/mapa.module').then(m => m.MapaModule)
  },
  { path: '', redirectTo: 'mapa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
