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
    pService.getProjects().subscribe((p: any) => {
      this.projects = p;
    });
  }

  ngOnInit(): void { }
  navSub(id: string): void {
    this.router.navigate([`subproject/${id}`]);
  }

}
