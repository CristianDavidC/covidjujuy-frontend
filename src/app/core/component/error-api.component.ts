import { ActionModel } from '@core/model/action.model';
import { Subject } from 'rxjs/Subject';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from '@angular/core';

import { animate, trigger, keyframes, transition, style } from '@angular/animations';

@Component({
  selector: 'app-error-api',
  template: `
    <div class="flex-center p-1 bg-danger rounded shadow m-1" *ngIf="message.length > 0" @errorState>
      <small class="text-white" > {{ message | uppercase }} </small>
    </div>
  `,
  animations: [trigger('errorState', [
    transition(':enter', [
      style({ transform: 'rotateX(-270deg)', opacity: 0 }),
      animate('300ms', keyframes([
        style({ transform: 'rotateX(-180deg)', opacity: 0.5 }),
        style({ transform: 'rotateX(0deg)', opacity: 1 }),
      ]))
    ]),
    transition(':leave', [
      style({ transform: 'rotateX(0deg)', opacity: 1 }),
      animate('300ms', keyframes([
        style({ transform: 'rotateX(180deg)', opacity: 0.5 }),
        style({ transform: 'rotateX(270deg)', opacity: 0 }),
      ]))
    ])
  ])]
})
export class ErrorApiComponent implements OnInit, OnChanges {
  @Input() message = '';

  @Output() action = new Subject<ActionModel>();
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.message.currentValue.length > 0) {
      setTimeout(() => {
        this.action.next({ name: 'ERROR_RESET' });
      }, 3000);
    }
  }
}
