import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViagemComponent } from './viagem/viagem.component';
import { HomeComponent } from './home/home.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';

import { ApplicationConfig } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViagemComponent,
    HomeComponent,
    ConfiguracoesComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
