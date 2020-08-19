import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  valueChanges: Observable<any>
  projects: any;
  constructor(private router: Router, private firestore: AngularFirestore) {
    this.valueChanges = this.firestore.collection('projects', ref => ref.orderBy('order'))
      .valueChanges({ idField: 'id' })
  }
  init(component) {
    if (!this.projects) {
      this.valueChanges.subscribe((p: any) => {
        this.setProjects(p);
        component.setData();
      });
    } else {
      component.setData();
    }
  }

  getValueChanges() {
    return this.valueChanges;
  }
  setProjects(p: any) {
    this.projects = p;
  }
  getProjects(): any {
    return this.projects;
  }
  getProject(id: string): any {
    return this.projects.find(p => p.id === id);
  }

}
