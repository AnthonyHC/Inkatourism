import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {User} from '../../../inkatouris/model/users.entity';
import {UserService} from '../../../inkatouris/service/users.service';
import {UserType} from '../../../inkatouris/model/users';

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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() user!: User;
  @Output() protected userAddRequested = new EventEmitter<User>();
  protected UserType = UserType;

  private userService: UserService = inject(UserService);

  constructor(private router: Router) {
    // Inicializar el objeto 'user' vacío
    this.user = new User({});
  }

  protected async createNewUser() {
    // Asegurarse de que el formulario es válido antes de hacer la solicitud
    if (this.user.email && this.user.password && this.user.fullname) {
      this.userService.create(this.user).subscribe({
        next: (newUser: User) => {
          sessionStorage.setItem('id', String(newUser.id));
          sessionStorage.setItem('fullname', this.user.fullname);
          sessionStorage.setItem('email', this.user.email);
          sessionStorage.setItem('password', this.user.password);
          sessionStorage.setItem('type_user', String(this.user.type_user));
          this.typeUserIdentification();
        },
        error: (error) => {
          console.log('Error creando usuario', error);
        },
      });
    } else {
      console.error('Por favor, complete todos los campos.');
    }
  }

  private typeUserIdentification() {
    const userType = Number(sessionStorage.getItem('type_user'));
    if (userType === UserType.PERSON) {
      this.router.navigate(['/subscriptions']);
    } else if (userType === UserType.COMPANY) {
      sessionStorage.setItem('type_plan', String(this.user.type_user));
      this.router.navigate(['/mainPage/management']);
    }
  }
}
