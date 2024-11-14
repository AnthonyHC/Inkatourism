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
  imports: [MatCardModule, MatButtonModule,
    MatInputModule, NgForOf, MatIcon, NgIf,
    NgOptimizedImage]
})
export class HomeComponent {
  posts = [
    { username: '@JavaMuse', date: 'Dec 10, 2022', content: 'Recomienden sus mejores animes, por favor', media: 'https://www.mundodeportivo.com/alfabeta/hero/2024/10/por-estos-motivos-debes-volver-a-ver-los-episodios-de-dandadan.jpg?width=768&aspect_ratio=16:9&format=nowebp', mediaType: 'image' },
    { username: '@aguerosergiokun', date: 'Dec 9, 2022', content: 'Cuando miran a tu chica 🤣', media: 'https://i.scdn.co/image/ab67616d0000b2739362ae71577d833bc2f04311', mediaType: 'video' },
    { username: '@xShottaa', date: 'Sep 15, 2022', content: 'Oda n’a plus le temps...', media: 'data:image/jpeg;base64,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', mediaType: 'image' }
  ];


  getSafeVideoUrl(media: string) {

  }
}

export class InicioComponent {
}
