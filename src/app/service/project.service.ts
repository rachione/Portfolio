import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private router: Router, private firestore: AngularFirestore) {

  }


  getProjects() {
    return this.firestore.collection('projects', ref => ref.orderBy('order'))
    .valueChanges({ idField: 'id' });
  }
  getProject(id: string) {
    return this.firestore.doc(`projects/${id}`).valueChanges();
  }

}
