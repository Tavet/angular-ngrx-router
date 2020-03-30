import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { FrameComponent } from './pages/frame/frame.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        HomeComponent,
        PostDetailComponent,
        FrameComponent
    ]
})

export class DashboardModule { }