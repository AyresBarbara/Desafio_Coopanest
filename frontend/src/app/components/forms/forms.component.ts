import { Component } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  imports: [FormsModule,  CommonModule],
})
export class FormsComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    telefone: '',
    sexo: 'Masculino',
    data_nascimento: '',
    profissao: '',
    estado_civil: 'Solteiro(a)',
    endereco: ''
  };
  
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  
  enviarFormulario() {
    this.usuarioService.criarUsuario(this.usuario).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/tabela']);

        this.usuario = {
          nome: '',
          email: '',
          telefone: '',
          sexo: 'Masculino',
          data_nascimento: '',
          profissao: '',
          estado_civil: 'Solteiro(a)',
          endereco: ''
        };
      },
      error: (err) => {
        console.error('Erro ao enviar:', err);
        alert('Erro ao cadastrar usuário');
      }
    });
  }
  
}