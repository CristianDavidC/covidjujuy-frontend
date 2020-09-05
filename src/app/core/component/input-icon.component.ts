import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-icon',
  template: `
    <div class="input-group-prepend h-100">
      <div class="input-group-text">
        <i class="fa fa-{{ icon }}"></i>
      </div>
    </div>
  `
})
export class InputIconComponent implements OnInit {
  @Input() icon = 'circle';

  constructor() {}

  ngOnInit() {}
}
