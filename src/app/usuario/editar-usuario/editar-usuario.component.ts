import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent {
  usuario: string = '';

  editarUsuario() {
    console.log('Usuário editado:', this.usuario);
  }
}