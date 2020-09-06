import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { AuthGuard } from 'app/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard',
            urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Dashboard' }
            ]
        },
        component: DashboardComponent,
        // canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
    declarations: [DashboardComponent],
    providers: [DashboardService]
})
export class DashboardModule { }
