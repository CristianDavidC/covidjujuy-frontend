import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  template: `
    <div class="d-flex justify-content-end" >
      <small *ngIf="control && control.invalid && control.touched" class="error" >
        {{ errorDisplay }}
      </small>
    </div>
  `,
  styles: [`
    .error {
      font-size: 0.7rem;
      font-weight: 400;
      color: #e25d5d;
    }
  `]
})
export class ErrorComponent implements OnInit {
  @Input() control: AbstractControl;

  get errorDisplay() {
    let result = 'error';
    
    if (this.control.hasError('required')) {
      result = 'Este campo es obligatorio';
    } else if (this.control.hasError('email')) {
      result = 'Ingrese una dirección de correo valida';
    } else if (this.control.getError('error') === 'matchpass') {
      result = 'Las contraseñas no coinciden';
    } else if (this.control.getError('error') === 'lastname') {
      result = 'Al menos un apellido es obligatorio';
    } else if (this.control.hasError('minlength')) {
      result = 'No ingrese menos de ' + this.control.errors.minlength.requiredLength + ' caracteres';
    } else {
      console.log(this.control.errors);
    }

    return result;
  }

  constructor() {}

  ngOnInit() {}
}
