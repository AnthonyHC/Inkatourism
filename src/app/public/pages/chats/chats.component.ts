import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Para ngModel
import { MatButtonModule } from '@angular/material/button';  // Para botones
import { MatFormFieldModule } from '@angular/material/form-field';  // Para mat-form-field
import { MatInputModule } from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import { Chat } from '../../../twuiter/model/chat.entity';
import { Message } from '../../../twuiter/model/message.entity';
import { ChatService } from '../../../twuiter/services/chat.service';
import { UserService } from '../../../inkatouris/service/users.service';
import { CompaniesService } from '../../../inkatouris/service/companies.service';
import {User} from '../../../inkatouris/model/users.entity';
import {Company} from '../../../inkatouris/model/company.entity';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatList,
    MatListItem
  ]
})
export class ChatComponent {
  contacts: Array<Chat> = [];
  persons: Array<User> = [];
  companies: Array<Company> = [];
  selectedContact: Chat | null = null;
  messages: Array<Message> = [];
  newMessage: string = '';

  constructor(
    private chatApiService: ChatService,
    private userService: UserService,
    private companyService: CompaniesService
  ) {}

  ngOnInit() {
    this.getChatsByRecipientId();
  }

  private getChatsByRecipientId() {
    this.chatApiService.getAll().subscribe((response: Array<Chat>) => {
      this.contacts = response.filter(c => c.recipientId1 === sessionStorage.getItem('id'));
      console.log(this.contacts);
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].type_2 === 'user') {
          this.userService.getAll().subscribe((response: Array<User>) => {
            this.persons = response;
            console.log(this.persons);
          })
        } else if (this.contacts[i].type_2 === 'company') {
          this.companyService.getAll().subscribe((response: Array<Company>) => {
            this.companies = response;
            console.log(this.companies);
          })
        }
      }
    });
  }
  getContactName(contact: Chat): string {
    if (contact.type_2 === 'user') {
      const user = this.persons.find(p => p.id === contact.recipientId2);
      return user ? user.fullName : 'Usuario desconocido';
    } else if (contact.type_2 === 'company') {
      const company = this.companies.find(c => c.id === contact.recipientId2);
      return company ? company.name : 'Compañia desconocido';
    }
    return 'Desconocido';
  }
  selectContact(contact: Chat) {
    this.selectedContact = contact;
    this.messages = contact.messages || [];
  }
  protected sendMessage() {
    if (this.newMessage.trim() && this.selectedContact) {
      const newMsg: Message = {
        description: this.newMessage,
        recipient_id: this.selectedContact.recipientId1 === sessionStorage.getItem('id')
          ? this.selectedContact.recipientId2
          : this.selectedContact.recipientId1,
        type: sessionStorage.getItem('type') || '',
      };
      this.chatApiService.addMessage(this.selectedContact.id, newMsg).subscribe({
        next: (updatedChat) => {
          this.messages = updatedChat.messages;
          this.newMessage = '';
        },
        error: (err) => {
          console.error('Error en enviar mensaje: ', err);
        }
      });
    }
  }
}
