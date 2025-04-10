import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TabelaComponent } from './components/tabela/tabela.component';

export const routes: Routes = [
  { path: 'cadastro', component: FormsComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' } // Redireciona pra "cadastro" se estiver na raiz
];
