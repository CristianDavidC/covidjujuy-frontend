import { NgModule } from '@angular/core';
import { UsuarioComponent } from './container/usuario.component';
import { UsuarioItemComponent } from './component/usuario-item.component';
import { UsuarioService } from './service/usuario.service';
import { CoreModule } from '@core/core.module';
import { UsuarioEditComponent } from './modal/usuario-edit.component';

@NgModule({
    imports: [
        CoreModule
    ], 
    declarations: [
        UsuarioComponent,
        UsuarioItemComponent,
        UsuarioEditComponent,
    ],
    exports: [
        UsuarioEditComponent
    ],
    entryComponents: [
        UsuarioEditComponent
    ],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule { }
