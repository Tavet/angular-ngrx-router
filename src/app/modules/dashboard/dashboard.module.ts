import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { FrameComponent } from './pages/frame/frame.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule
    ],
    declarations: [
        HomeComponent,
        PostDetailComponent,
        FrameComponent
    ]
})

export class DashboardModule { }