import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoopanestService } from '../../services/coopanest.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: CoopanestService) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      profissao: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      endereco: ['', Validators.required],
    });
  }

  enviarDados() {
    if (this.cadastroForm.valid) {
      this.service.criarPessoa(this.cadastroForm.value).subscribe(() => {
        alert('Cadastro realizado com sucesso!');
        this.cadastroForm.reset();
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
