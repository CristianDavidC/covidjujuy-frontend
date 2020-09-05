import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'
})

export class UsuarioComponent implements OnInit {
    usuarios: any = [];

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() { 
        this.usuarioService.getUsers().subscribe(response => {
            console.log(response);
            this.usuarios = response.payload.users;
        });
    }
}