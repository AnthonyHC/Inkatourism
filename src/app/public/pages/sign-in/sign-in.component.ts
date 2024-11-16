import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {User} from '../../../inkatouris/model/users.entity';
import {UserService} from '../../../inkatouris/service/users.service';
import {Company} from '../../../inkatouris/model/company.entity';
import {CompaniesService} from '../../../inkatouris/service/companies.service';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInput,
    MatLabel,
    RouterModule,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  users: Array<User> = [];
  companies: Array<Company> = [];
  email: string;
  password: string;

  constructor(private userApiService: UserService, private companyApiService: CompaniesService, private router: Router) {
    this.email = "";
    this.password = "";

  }

  ngOnInit(){
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userApiService.getAll().subscribe((response: Array<User>) => {
      this.users = response;
      console.log(this.users);
    })
    this.companyApiService.getAll().subscribe((response: Array<Company>) => {
      this.companies = response;
      console.log(this.companies);
    })
  }

  public validateUser() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      sessionStorage.setItem('id', user.id);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('fullName', user.fullName);
      sessionStorage.setItem('type', 'user');
      this.router.navigate(['/mainPage/inicio']);
      return;
    }
    const company = this.companies.find(c => c.email === this.email && c.password === this.password);
    if (company) {
      sessionStorage.setItem('id', company.id);
      sessionStorage.setItem('email', company.email);
      sessionStorage.setItem('fullName', company.name);
      sessionStorage.setItem('type', 'company');
      this.router.navigate(['/mainPage/inicio']);
      return;
    }
    console.log("Usuario o contraseña incorrectos");
  }
}
