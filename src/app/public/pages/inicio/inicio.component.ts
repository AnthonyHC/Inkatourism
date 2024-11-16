import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {PostEntity} from '../../../twuiter/model/post.entity';
import {PostService} from '../../../twuiter/services/post.service';
import {User} from '../../../inkatouris/model/users.entity';
import {UserService} from '../../../inkatouris/service/users.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Company} from '../../../inkatouris/model/company.entity';
import {CompaniesService} from '../../../inkatouris/service/companies.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,
    MatInputModule, NgForOf, MatIcon, NgIf,
    FormsModule]
})
export class HomeComponent {
  posts: Array<PostEntity> = [];
  user: User = new User({});
  company: Company = new Company({});
  fullNames: { [key: string]: string } = {};

  newPost: PostEntity = new PostEntity({});
  recipientId =  sessionStorage.getItem('id');
  type =  sessionStorage.getItem('type');


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

  constructor(private postApiService: PostService,
              private userApiService: UserService,
              private companyApiService: CompaniesService,
              private sanitizer: DomSanitizer ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  private getAllPosts() {
    this.postApiService.getAll().subscribe((response: Array<PostEntity>) => {
      this.posts = response;
      console.log(this.posts);
      this.loadUserNames();
    })
  }
public loadUserNames(): void {
    this.posts.forEach(post => {
      if (post.type === 'user' && !this.fullNames[post.recipientId]) {
        this.userApiService.getById(post.recipientId).subscribe(user => {
          console.log(user.fullName);
          this.fullNames[post.recipientId] = user.fullName;
        });
      } else if (post.type === 'company' && !this.fullNames[post.recipientId]) {
        this.companyApiService.getById(post.recipientId).subscribe(company => {
          console.log(company.name);
          this.fullNames[post.recipientId] = company.name;
        });
      }
    });
  }


  public getUserFullName(recipientId: string): string {
    console.log(this.fullNames[recipientId]);
    return this.fullNames[recipientId] || 'Cargando...';
  }

  public createPost() {
    console.log(this.newPost);
    if(this.newPost.description && this.newPost.url_imagen && this.newPost.url_video && this.newPost.place) {
      this.newPost.recipientId = this.recipientId || "";
      this.newPost.type = this.type || "";

      this.postApiService.create(this.newPost).subscribe(response => {
        console.log(this.newPost);
        this.newPost.description = "";
        this.newPost.url_video = "";
        this.newPost.url_imagen = "";
        this.newPost.place = "";
        this.getAllPosts();
      })
    } else {
      alert("All fields are required.");
    }
  }
}

