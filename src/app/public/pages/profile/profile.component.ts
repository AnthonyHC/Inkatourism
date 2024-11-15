import { Component, OnInit } from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importamos DomSanitizer
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardActions,
    MatButton,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    NgForOf,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'Fabrisio Belahonia Miranda',
    username: 'FabrisioMiranda',
    bio: 'Ni se cómo se usa esta wbda',
    joinedDate: 'September 2021',
    followersCount: 2,
    followingCount: 106,
    posts: [
      {
        username: 'JavaMuse🪼',
        date: 'Dec 10, 2022',
        message: 'Recomienden sus mejores animes, por favor',
        media: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/14/db/41/caption.jpg?w=1200&h=-1&s=1'  // Imagen
      },
      {
        username: 'Sergio Kun Aguero',
        date: 'Dec 9, 2022',
        message: 'Cuando miran a tu chica 🤣',
        media: ''  // Sin media
      },
      {
        username: 'Shotta❄️',
        date: 'Sep 15, 2022',
        message: 'Oda n’a plus le temps de rigoler et il est déjà entrain de le prouver #ONEPIECE1060',
        media: 'https://www.youtube.com/watch?v=XtpIBGnA-a4'  // Video de YouTube
      },
      {
        username: 'Ibai',
        date: 'Mar 29, 2022',
        message: 'Lo necesito 🥺',
        media: ''  // Sin media
      },
      {
        username: 'MikuLover',
        date: 'Jan 20, 2023',
        message: '¿Alguien más ve anime en la madrugada?',
        media: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/14/db/41/caption.jpg?w=1200&h=-1&s=1'  // Imagen
      },
      {
        username: 'TechGuru',
        date: 'Feb 5, 2023',
        message: 'Nuevo tutorial de desarrollo web',
        media: 'https://www.youtube.com/watch?v=XtpIBGnA-a4'  // Video de YouTube
      }
    ]
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {}

  getSafeVideoUrl(url: string): SafeResourceUrl {
    const videoId = url.split('v=')[1].split('&')[0];  // Extrae el ID del video
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  navigateToTweets() {
    // Navegar a la página de tweets del usuario (implementa la lógica de enrutamiento si es necesario)
  }
}
