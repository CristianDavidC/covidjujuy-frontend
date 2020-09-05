import { NgModule } from '@angular/core';

import { AngularModule } from './angular.module';

import { ApiService } from './service/api.service';

@NgModule({
  imports: [ AngularModule ],
  providers: [
    ApiService,
  ]
})
export class ServiceModule {}
