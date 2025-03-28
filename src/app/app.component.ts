import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './usuario/inserir-usuario/inserir-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListarUsuarioComponent, InserirUsuarioComponent, EditarUsuarioComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}