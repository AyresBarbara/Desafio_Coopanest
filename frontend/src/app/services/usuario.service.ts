
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {

    id_usuario?: number;
    nome: string;
    email: string;
    telefone?: string;
    sexo: 'Masculino' | 'Feminino' | 'Outro';
    data_nascimento: string;
    profissao?: string;
    estado_civil?: 'Solteiro(a)' | 'Casado(a)' | 'Divorciado(a)' | 'Viúvo(a)';
    endereco?: string;
    data_atualizacao?: string;

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/dados';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id_usuario}`, usuario);
  }
}
