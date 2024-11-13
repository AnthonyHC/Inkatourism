import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../../components/language-switcher/language-switcher.component';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatListItem,
    MatSidenavContent,
    RouterOutlet,
    MatIcon,
    MatSidenav,
    MatNavList,
    MatSidenavContainer,
    NgIf,
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
