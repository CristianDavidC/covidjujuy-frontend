import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module'
;
import { SpinnerComponent } from './spinner.component';
import { NavigationComponent } from './header-navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        SpinnerComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent
    ],
    exports: [
        SpinnerComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent
    ]
})
export class SharedModule { }
