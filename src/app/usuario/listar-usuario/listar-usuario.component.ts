import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuario.component.html'
})
export class ListarUsuarioComponent {
  usuarios = ['João', 'Maria', 'Carlos'];
}