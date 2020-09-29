import { ErrorComponent } from './component/error.component';
import { NgModule } from '@angular/core';

import { AngularModule } from './angular.module';
import { ErrorApiComponent } from './component/error-api.component';

@NgModule({
  imports: [AngularModule],
  declarations: [ErrorComponent, ErrorApiComponent],
  exports: [ErrorComponent, ErrorApiComponent]
})
export class ComponentModule {}
