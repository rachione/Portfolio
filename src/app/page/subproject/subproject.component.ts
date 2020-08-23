import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subproject',
  templateUrl: './subproject.component.html',
  styleUrls: ['./subproject.component.scss']
})
export class SubprojectComponent implements OnInit {
  projectId: string;
  project: any;
  slideIndex = 0;
  constructor(private router: Router, private route: ActivatedRoute, public pService: ProjectService) {
    this.projectId = this.route.snapshot.params.id;
    this.pService.init(this);
  }
  setData(): void {
    this.project = this.pService.getProject(this.projectId);
  }
  ngOnInit(): void {
  }
  openModal(): void {
    document.getElementById('bigImg').style.display = 'block';
  }
  closeModal(): void {
    document.getElementById('bigImg').style.display = 'none';
  }
  plusSlides(n): void {
    this.slideIndex += n;
    this.showSlides();
  }
  currentSlide(n): void {
    this.slideIndex = n;
    this.showSlides();
  }
  showSlides(): void {

    const slides = document.getElementsByClassName('img-slides') as HTMLCollectionOf<HTMLElement>;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';

  }
  previousProject(): void {


  }
  nextProject(): void {

  }

  backToMenu(): void {
    this.router.navigate([`project`]);
  }
}
