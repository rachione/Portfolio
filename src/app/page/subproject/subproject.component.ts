import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-subproject',
  templateUrl: './subproject.component.html',
  styleUrls: ['./subproject.component.scss']
})
export class SubprojectComponent implements OnInit {
  projectId: string;
  project: any;
  constructor(private route: ActivatedRoute, public pService: ProjectService) {
    this.projectId = this.route.snapshot.params.id;
    this.pService.init(this);
  }
  setData(): void{
    this.project = this.pService.getProject(this.projectId);
  }
  ngOnInit(): void {
  }

}
