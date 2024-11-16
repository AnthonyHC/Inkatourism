import { Component, OnInit } from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import {PostEntity} from '../../../twuiter/model/post.entity';
import {PostService} from '../../../twuiter/services/post.service';

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
  ownerPost: Array<PostEntity> = [];
  user = {
    name: sessionStorage.getItem('fullName'),
    bio: sessionStorage.getItem('email'),
  };

  constructor(private sanitizer: DomSanitizer, private postApiService: PostService) { }

  private getOwnPost() {
    this.postApiService.getAll().subscribe((response: Array<PostEntity>) => {
      this.ownerPost = response.filter(p => p.recipientId === sessionStorage.getItem('id'));
      console.log(this.ownerPost);
    })
  }

  ngOnInit(): void {
    this.getOwnPost();
  }

  getSafeVideoUrl(media: string): SafeResourceUrl {
    const embedUrl = this.getEmbedUrl(media);
    if (!embedUrl) {
      console.warn('No valid embed URL generated for media:', media);
      return '';
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getEmbedUrl(url: string): string {
    if (!url) {
      console.error('Video URL is undefined or empty:', url);
      return '';
    }

    try {
      let videoId: string | undefined;

      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      }
      else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      }

      if (!videoId) {
        console.error('No video ID found in URL:', url);
        return '';
      }

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      console.error('Error parsing video URL:', url, error);
      return '';
    }
  }

  protected readonly sessionStorage = sessionStorage;
}
