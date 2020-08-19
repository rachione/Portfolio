import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private valueChanges: Observable<any>
  private projects: any;
  constructor(private router: Router, private firestore: AngularFirestore) {
    this.valueChanges = this.firestore
      .collection('projects', ref => ref.orderBy('order'))
      .valueChanges({ idField: 'id' })
  }

  init(component) {
    if (!this.projects) {
      let subscription = this.valueChanges.subscribe((p: any) => {
        this.setProjects(p);
        component.setData();
        subscription.unsubscribe();
      });
    } else {
      component.setData();
    }
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
