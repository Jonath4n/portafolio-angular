import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },//Cuando my url este vacio va a redirigir a mi Home
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, //Excepcion, si no navega a las opciones que redirija a HOME

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], //Declarando rutas de raiz .forRoot ((.forChild))
  exports: [RouterModule]
})
export class AppRoutingModule { }
