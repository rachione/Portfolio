

import { Component, OnInit } from '@angular/core';
import bestGame from '../../../assets/data/bestGame.json';
import about from '../../../assets/data/about.json';
import skills from '../../../assets/data/skills.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bestGameData = bestGame;
  aboutData = about;
  skillsData = skills;

  constructor() {

  }

  ngOnInit(): void {
  }



}
