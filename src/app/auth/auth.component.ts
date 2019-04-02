import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../shared/animation/fade.animation';

@Component({
  selector: 'av-auth',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger],
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @HostBinding('@fade') a = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
