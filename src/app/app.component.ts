import { Component, OnDestroy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animation';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]

})

export class AppComponent{

  items: NbMenuItem[] = [
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Project',
      link: '/project'
    },
    {
      title: 'Resume',
      link: '/resume'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ];
  constructor(public dataservice: DataService) {
  }
  // tslint:disable-next-line: typedef
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}

