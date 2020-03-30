import { FrameComponent } from './pages/frame/frame.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';


const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: FrameComponent, children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'post/:author', component: PostDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }
