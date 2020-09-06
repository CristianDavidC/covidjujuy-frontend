import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { NavigationComponent } from './header-navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // SpinnerComponent,
        // NavigationComponent,
        // BreadcrumbComponent,
        // SpinnerComponent
    ],
    exports: [
        // SpinnerComponent,
        // NavigationComponent,
        // BreadcrumbComponent,
        // SpinnerComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ],
})
export class SharedModule { }
