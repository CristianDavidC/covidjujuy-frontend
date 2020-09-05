import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuario-item',
    templateUrl: 'usuario-item.component.html'
})

export class UsuarioItemComponent implements OnInit {

    @Input() usuario: any;

    constructor() { }

    ngOnInit() { }
}