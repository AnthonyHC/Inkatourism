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
import {map, Observable, of} from 'rxjs';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,
    MatInputModule, NgForOf, MatIcon, NgIf,
    NgOptimizedImage, AsyncPipe, FormsModule]
})
export class HomeComponent {
  posts: Array<PostEntity> = [];
  user: User = new User({});
  company: Company = new Company({});
  fullNames: { [key: string]: string } = {};

  newPost: PostEntity = new PostEntity({});
  // recipientId =  sessionStorage.getItem('id');
  recipientId = "6715e4ae4207fc3afdb56c13";
  // type =  sessionStorage.getItem('type');
  type = "user";


  getSafeVideoUrl(media: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(media));
  }

  getEmbedUrl(url: string): string {
    // Convierte la URL de YouTube en un enlace de inserción
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
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
      // this.userApiService.getAll().subscribe((usersResponse: Array<User>) => {
      //   // Iterar sobre el arreglo de posts y mapear el usuario correspondiente
      //   this.users = this.posts.map(post => {
      //     // Buscar el usuario que tenga el mismo ID que el autor del post
      //     return usersResponse.find(user => user.id.toString() === post.recipientId.toString());
      //   });
      //
      //   console.log(this.users);
      // });
    })
  }


  // public async getUserFullName(recipientId: string, type: string) {
  //   if(type == "user") {
  //     this.userApiService.getById(recipientId).subscribe((response: User) => {
  //       this.user = response;
  //       return this.user.fullName;
  //     })
  //   }
  //   if(type == "company") {
  //     this.companyApiService.getById(recipientId).subscribe((response: Company) => {
  //       this.company = response;
  //       return this.company.name;
  //     })
  //   }


  // public getUserFullName(recipientId: string, type: string): Observable<string> {
  //   // // Suponiendo que tienes un servicio para obtener datos del usuario por ID
  //   // let userName = '';
  //   //
  //   // if (type === 'user') {
  //   //   // Obtener el nombre completo del usuario administrador
  //   //   this.userApiService.getById(recipientId).subscribe(user => {
  //   //     userName = `${user.fullName}`; // Suponiendo que tu modelo de usuario tiene firstName y lastName
  //   //   });
  //   // } else if (type === 'company') {
  //   //   // Obtener el nombre completo de un usuario regular
  //   //   this.companyApiService.getById(recipientId).subscribe(company => {
  //   //     userName = `${company.name}`;
  //   //   });
  //
  //   if (type === 'user') {
  //     return this.userApiService.getById(recipientId).pipe(
  //       map(user => `${user.fullName}`)  // Devuelve el nombre completo del usuario
  //     );
  //   } else if (type === 'company') {
  //     return this.companyApiService.getById(recipientId).pipe(
  //       map(company => `${company.name}`)  // Devuelve el nombre de la empresa
  //     );
  //   } else {
  //     return of('Unknown');  // Devuelve un valor por defecto en caso de que no sea 'user' ni 'company'
  //   }
  //
  // }



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
    return this.fullNames[recipientId] || 'Cargando...';  // Muestra un texto si el nombre no ha cargado
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

