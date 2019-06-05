import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { fadeStateTrigger } from 'src/app/shared/animations/fade.animation';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  animations: [fadeStateTrigger],
  styles: []
})
export class UserComponent implements OnInit {

  @HostBinding('@fade') a = true;

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

}
