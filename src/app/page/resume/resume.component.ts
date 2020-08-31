import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfSrc = "";
  constructor(platformLocation: PlatformLocation) {
    let origin = (platformLocation as any).location.origin;
    this.pdfSrc = `${origin}/assets/Resume.pdf`;
    console.log(this.pdfSrc)
  }

  ngOnInit(): void {
  }


}
