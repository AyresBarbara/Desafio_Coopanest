import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoopanestService {
  private apiUrl = 'http://localhost:3000/pessoas'; // Altere se necessário

  constructor(private http: HttpClient) {}

  criarPessoa(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  listarPessoas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  atualizarPessoa(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dados);
  }
}
