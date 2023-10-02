import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PortalComponent } from './pages/portal/portal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {path: 'geoportal', component: PortalComponent },
      { path: '**', redirectTo: 'geoportal', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
