import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inserir-usuario.component.html'
})
export class InserirUsuarioComponent {
  nomeUsuario: string = '';

  adicionarUsuario() {
    console.log('Usuário adicionado:', this.nomeUsuario);
  }
}