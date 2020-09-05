import { NgModule } from '@angular/core';

import { AngularModule } from './angular.module';
import { ServiceModule } from './service.module';
import { ComponentModule } from './component.module';

@NgModule({
    imports: [
      AngularModule,
      ServiceModule,
      ComponentModule,
    ],
    exports: [
      AngularModule,
      ServiceModule,
      ComponentModule,
    ]
})
export class CoreModule {}
