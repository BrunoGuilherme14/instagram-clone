import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';

import { Autenticacao } from './services/autenticacao.service';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';

import { format } from 'url';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { IncluirPublicacaoComponent } from './incluir-publicacao/incluir-publicacao.component';

import {NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ComentariosComponent } from './publicacoes/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [
    Autenticacao,
    AutenticacaoGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [ IncluirPublicacaoComponent ]
})
export class AppModule { }
