import { NgModule } from '@angular/core';
import { UsuarioComponent } from './container/usuario.component';
import { UsuarioItemComponent } from './component/usuario-item.component';
import { UsuarioService } from './service/usuario.service';
import { CoreModule } from '@core/core.module';

@NgModule({
    imports: [
        CoreModule
    ],
    exports: [],
    declarations: [
        UsuarioComponent,
        UsuarioItemComponent
    ],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule { }
