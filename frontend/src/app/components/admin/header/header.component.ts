import { Component, OnInit, Input } from '@angular/core';
import {
  IconDefinition,
  faHospital,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title?: string;

  @Input()
  icon?: IconDefinition | undefined;

  faHospital = faHospital;

  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}

  checkForScroll() {
    const header = document.getElementById('header');
    const sticky = header?.offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset > sticky!) {
        header!.classList.add('sticky');
      } else {
        header!.classList.remove('sticky');
      }
    };
  }
}
