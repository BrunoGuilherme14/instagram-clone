import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { AcessoComponent } from './acesso/acesso.component';


const routes: Routes = [
  {path: '', component: AcessoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'publicacoes', component: PublicacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
