import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { ViagemComponent } from './viagem/viagem.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConfiguracoesComponent } from './componentes/configuracoes/configuracoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaViagemComponent } from './componentes/nova-viagem/nova-viagem.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EsqueceuSenhaComponent } from './paginas/esqueceu-senha/esqueceu-senha.component';
import { ConvidadosComponent } from './componentes/convidados/convidados.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViagemComponent,
    HomeComponent,
    ConfiguracoesComponent,
    CadastroComponent,
    NovaViagemComponent,
    //SnackbarComponent,
    EsqueceuSenhaComponent,
    ConvidadosComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,

  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
