import { AboutComponent } from './page/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './page/resume/resume.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjectComponent } from './page/project/project.component';
import { SubprojectComponent } from './page/subproject/subproject.component';

const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'subproject/:id', component: SubprojectComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/project' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
