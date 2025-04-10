import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TabelaComponent } from './components/tabela/tabela.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsComponent, TabelaComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
