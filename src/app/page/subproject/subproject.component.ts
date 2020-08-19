import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subproject',
  templateUrl: './subproject.component.html',
  styleUrls: ['./subproject.component.scss']
})
export class SubprojectComponent implements OnInit {
  project: any;
  constructor(private router: Router, public dataservice: DataService) {
    // no data then go to main
    if (!this.dataservice.project) {
      this.router.navigate(['project']);
    }
  }

  ngOnInit(): void {
    this.project = this.dataservice.project;
  }

}
