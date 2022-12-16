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

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  setData(): void {
    this.project = this.pService.getProject(this.projectId);
  }
  ngOnInit(): void {
  }
  //big Image
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
    var baseIndex = 1
    var maxIndex = slides.length
    if (this.project.demoVideo == null) {
      baseIndex = 0;
      maxIndex = slides.length - 1
    }

    if (this.slideIndex > maxIndex) {
      this.slideIndex = baseIndex;
    }
    if (this.slideIndex < baseIndex) {
      this.slideIndex = maxIndex;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - baseIndex].style.display = 'block';


  }
  getMediaLength() {
    let mediaLength = this.project.mediaLength
    if (mediaLength == null) {
      return 4
    } else {
      return mediaLength;
    }
  }
  getThumbClassName(): string {
    let thumbClass = this.project.thumbClass
    if (thumbClass == null) {
      return 'ratio16vs9'
    } else {
      return thumbClass;
    }
  }

  getThumb(index): string {
    let ext='jpg'
    if(this.project.imgtype && this.project.imgtype=='gif')
      ext='gif'
    return `assets/project/thumb/${this.projectId}_thumb_${index}.${ext}`;
  }


  getVideo(): string {
    return `https://www.youtube.com/embed/${this.project.demoVideo}?rel=0`;
  }

  isFullWidth(isFirst) {
    return isFirst && this.project.noMainImage == null
  }
  //router
  previousProject(): void {
    const previousId = this.pService.getPlusProjectId(this.projectId, -1);
    this.router.navigate([`subproject/${previousId}`]);
  }
  nextProject(): void {
    const nextId = this.pService.getPlusProjectId(this.projectId, 1);
    this.router.navigate([`subproject/${nextId}`]);
  }
  backToMenu(): void {
    this.router.navigate([`project`]);
  }
  goToLink(): void {
    window.open(this.project.link, "_blank");
  }
  goToSCLink(): void {
    window.open(this.project.SCLink, "_blank");
  }
  getLinkText(): string {
    return (this.project.linkType) ? this.project.linkType : 'DOWNLOAD';
  }

}
