import { provideRouter, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TabelaComponent } from './components/tabela/tabela.component';

export const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'tabela', component: TabelaComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
