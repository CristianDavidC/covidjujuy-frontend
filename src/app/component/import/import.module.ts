import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';

import { ImportComponent } from './container/import.component';

import { UploadService } from './services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  declarations: [
    ImportComponent
  ],
  providers: [
    UploadService
  ]
})
export class ImportModule { }
