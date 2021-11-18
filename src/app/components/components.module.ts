import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app.routing';
import { RouterModule } from '@angular/router';
import { KnowMoreComponent } from './know-more/know-more.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
    exports:[LandingComponent,
        // ProfileComponent,
        KnowMoreComponent,
        ProjectCardComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        MaterialModule,
        // AppRoutingModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        // ProfileComponent,
        KnowMoreComponent,
        ProjectCardComponent
    ]
})
export class ComponentsModule { }
