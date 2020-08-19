import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataService } from '../../data-service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any;
  constructor(firestore: AngularFirestore, private router: Router, public dataservice: DataService) {
    firestore.collection('projects', ref => ref.orderBy('order'))
      .valueChanges({ idField: 'id' })
      .subscribe((p: any) => {
        this.projects = p;
      });
  }

  ngOnInit(): void {}
  navSub(id: string): void {
    this.dataservice.project = this.projects.find((p: any) => p.id === id);
    this.router.navigate(['subproject']);
  }

}
