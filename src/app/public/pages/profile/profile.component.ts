import {Component, OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

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
    NgForOf
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
        message: 'Recomienden sus mejores animes, por favor'
      },
      {
        username: 'Sergio Kun Aguero',
        date: 'Dec 9, 2022',
        message: 'Cuando miran a tu chica 🤣'
      },
      {
        username: 'Shotta❄️',
        date: 'Sep 15, 2022',
        message: 'Oda n’a plus le temps de rigoler et il est déjà entrain de le prouver #ONEPIECE1060'
      },
      {
        username: 'Ibai',
        date: 'Mar 29, 2022',
        message: 'Lo necesito 🥺'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {}

  navigateToTweets() {
    // Navigate to the user's tweets page (implement routing logic as needed)
  }
}
