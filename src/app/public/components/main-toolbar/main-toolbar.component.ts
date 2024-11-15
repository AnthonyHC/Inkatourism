import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.css'
})
export class MainToolbarComponent {
  redirectPath = "home";
}
