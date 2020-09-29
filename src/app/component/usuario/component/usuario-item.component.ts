import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioEditComponent } from '../modal/usuario-edit.component';

@Component({
    selector: 'app-usuario-item',
    templateUrl: 'usuario-item.component.html'
})

export class UsuarioItemComponent implements OnInit {

    @Input() usuario: any;

    constructor(private modalService: NgbModal) { }

    ngOnInit() { }

    edit() {
        const modalRef = this.modalService.open(UsuarioEditComponent);
        modalRef.componentInstance.usuario = this.usuario;

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }
}