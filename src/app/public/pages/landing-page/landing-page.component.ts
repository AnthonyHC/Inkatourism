import { Component } from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatAnchor,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  signInPath = '/mainToolbar/signIn';
  registerPath = '/mainToolbar/register';
}
