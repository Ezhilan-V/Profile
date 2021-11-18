import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeComponent } from './profile/profile.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { FooterComponent } from './profile/footer/footer.component';

const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'prefix' },
    { path: 'landing', component: LandingComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'others', component: FooterComponent },
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
