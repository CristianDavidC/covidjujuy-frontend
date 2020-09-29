import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  @Input() usuario;
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.usuario.idUsuario != 0) {
      this.setForm();
    }
  }

  initForm() {
    this.form = this.fb.group({
      nick: '',
      email: '',
      activo: ''
    });
  }

  setForm() {
    this.form.patchValue({
      nick: this.usuario.nick,
      email: this.usuario.email,
      activo: this.usuario.activo == 1
    })
  }
  
  save() {
    this.activeModal.close(this.form.value);
  }
}
