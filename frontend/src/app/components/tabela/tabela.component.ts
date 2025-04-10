import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { NgIf, NgFor, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports: [NgIf, NgFor, FormsModule, CommonModule],
})
export class TabelaComponent implements OnInit {
  usuarios: Usuario[] = [];
  editando: number | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  editar(id: number) {
    this.editando = id;
  }

  salvar(usuario: Usuario) {
    this.usuarioService.atualizarUsuario(usuario).subscribe({
      next: () => {
        alert('Usuário atualizado com sucesso!');
  this.editando = null;
  this.usuarioService.listarUsuarios().subscribe(data => {
    this.usuarios = [...data];
    alert('Usuário atualizado com sucesso!');
  });
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
        alert('Erro ao atualizar usuário');
      }
    });
  }
  
}
