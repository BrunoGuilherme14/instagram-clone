import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { AcessoComponent } from './acesso/acesso.component';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';


const routes: Routes = [
  {path: '', component: AcessoComponent},
  {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]},
  {path: 'publicacoes', component: PublicacoesComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
