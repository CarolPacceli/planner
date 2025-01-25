import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { EsqueceuSenhaComponent } from './paginas/esqueceu-senha/esqueceu-senha.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'esqueceusenha', component: EsqueceuSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
