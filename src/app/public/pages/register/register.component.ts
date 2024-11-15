import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { User } from '../../../inkatouris/model/users.entity';
import { UserService } from '../../../inkatouris/service/users.service';
import { UserType } from '../../../inkatouris/model/users.enum';
import { CompaniesService } from '../../../inkatouris/service/companies.service';
import { Company } from '../../../inkatouris/model/company.entity';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User({});
  company: Company = new Company({});
  @Output() protected userAddRequested = new EventEmitter<User | Company>();

  private userService: UserService = inject(UserService);
  private companyService: CompaniesService = inject(CompaniesService);
  protected userType: UserType = UserType.user;

  constructor(private router: Router) {}

  protected async createNewUser() {
    if (this.userType == UserType.user) {
      if (this.user.email && this.user.password && this.user.fullName) {
        this.userService.create(this.user).subscribe({
          next: (newUser: User) => {
            sessionStorage.setItem('id', newUser.id);
            sessionStorage.setItem('email', this.user.email);
            sessionStorage.setItem('fullName', this.user.fullName);
            sessionStorage.setItem('type', String(this.userType));
            this.router.navigate(['/mainPage/home']);
          },
          error: (error) => {
            console.log('Error creando usuario', error);
          },
        });
      }
    } else if (this.userType == UserType.company) {
      if (this.company.email && this.company.password && this.company.name) {
        this.companyService.create(this.company).subscribe({
          next: (newCompany: Company) => {
            sessionStorage.setItem('id', newCompany.id);
            sessionStorage.setItem('email', this.company.email);
            sessionStorage.setItem('fullName', this.company.name);
            sessionStorage.setItem('type', String(this.userType));
            this.router.navigate(['/mainPage/home']);
          },
          error: (error) => {
            console.log('Error creando usuario', error);
          },
        });
      } else {
        console.log('Completa los campos correspondientes para la empresa');
      }
    }
  }

  protected readonly UserType = UserType;
}
