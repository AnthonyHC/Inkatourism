import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, NgForOf, MatIcon, NgIf, NgOptimizedImage]
})
export class HomeComponent {
  posts = [
    { username: '@JavaMuse', date: 'Dec 10, 2022', content: 'Recomienden sus mejores animes, por favor', media: 'assets/anime.jpg', mediaType: 'image' },
    { username: '@aguerosergiokun', date: 'Dec 9, 2022', content: 'Cuando miran a tu chica 🤣', media: 'assets/video.mp4', mediaType: 'video' },
    { username: '@xShottaa', date: 'Sep 15, 2022', content: 'Oda n’a plus le temps...', media: 'assets/onepiece.jpg', mediaType: 'image' }
  ];

}

export class InicioComponent {
}
