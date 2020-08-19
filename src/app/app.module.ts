import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbCardModule,
  NbSidebarModule, NbProgressBarModule, NbTooltipModule, NbIconModule, NbListModule, NbPopoverModule, NbActionsModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AboutComponent } from './page/about/about.component';
import { ResumeComponent } from './page/resume/resume.component';
import { ProjectComponent } from './page/project/project.component';
import { ContactComponent } from './page/contact/contact.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SubprojectComponent } from './page/subproject/subproject.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ProjectComponent,
    ContactComponent,
    SubprojectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbPopoverModule,
    NbButtonModule,
    NbListModule,
    NbActionsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
    NbProgressBarModule,
    NbCardModule,
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
