import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private valueChanges: Observable<any>;
  private projects: any;
  constructor(private router: Router, private firestore: AngularFirestore) {
    this.valueChanges = this.firestore
      .collection('projects', ref => ref.orderBy('order'))
      .valueChanges({ idField: 'id' });
  }

  init(component): void {
    if (!this.projects) {
      const subscription = this.valueChanges.subscribe((p: any) => {
        this.setProjects(p);
        component.setData();
        subscription.unsubscribe();
      });
    } else {
      component.setData();
    }
  }

  setProjects(p: any): void {
    this.projects = p;
  }
  getProjects(): any {
    return this.projects.map(x => {
      return { id: x.id, name: x.name };
    });
  }
  getProject(id: string): any {
    return this.projects.find(p => p.id === id);
  }
  getPlusProjectId(current_id: string, n: number): void {
    let index = this.projects.findIndex(x => x.id === current_id);
    index += n;
    if (index >= this.projects.length) {
      index = 0;
    }
    if (index < 0) {
      index = this.projects.length - 1;
    }
    return this.projects[index].id;

  }

}
