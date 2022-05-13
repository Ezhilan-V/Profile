import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'prefix' },
    { path: 'projects', component: ProfileComponent },
    { path: 'profile', component: ResumeComponent },
    { path: '**', redirectTo: 'profile', pathMatch: 'full' },
];
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
