import { ErrorComponent } from './component/error.component';
import { NgModule } from '@angular/core';

import { AngularModule } from './angular.module';
import { InputIconComponent } from './component/input-icon.component';
import { ErrorApiComponent } from './component/error-api.component';
import { LoadingComponent } from '@core/component/loading.component';

@NgModule({
  imports: [AngularModule],
  declarations: [ErrorComponent, ErrorApiComponent, InputIconComponent, LoadingComponent],
  exports: [ErrorComponent, ErrorApiComponent, InputIconComponent, LoadingComponent]
})
export class ComponentModule {}
