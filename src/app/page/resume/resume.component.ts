import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfSrc = `assets/Resume.pdf`;
  constructor() {
    console.log(this.pdfSrc)
  }

  ngOnInit(): void {
  }


}
