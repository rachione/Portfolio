import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any;
  constructor(private router: Router, public pService: ProjectService) {
    this.pService.init(this);
  }
  setData(): void {
    this.projects = this.pService.getProjects();
  }
  ngOnInit(): void { }
  navSub(id: string): void {
    this.router.navigate([`subproject/${id}`]);
  }

}
