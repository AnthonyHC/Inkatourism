import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Para ngModel
import { MatButtonModule } from '@angular/material/button';  // Para botones
import { MatFormFieldModule } from '@angular/material/form-field';  // Para mat-form-field
import { MatInputModule } from '@angular/material/input';
import {NgForOf} from '@angular/common';  // Para matInput

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
  imports: [
    FormsModule,  // Asegúrate de que FormsModule está importado
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf
  ]
})
export class ChatComponent {
  // Verifica que 'messages' esté correctamente definido como un arreglo
  messages = [
    { user: 'Alice', message: 'Hey, how are you?', time: '10:15 AM' },
    { user: 'Bob', message: 'I\'m good, thanks! You?', time: '10:16 AM' },
    { user: 'Alice', message: 'Doing great, just working on a project.', time: '10:17 AM' },
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      const newMsg = {
        user: 'You',
        message: this.newMessage,
        time: new Date().toLocaleTimeString(),
      };
      this.messages.push(newMsg);  // Asegúrate de que 'messages' es un arreglo
      this.newMessage = '';  // Limpia el campo después de enviar el mensaje
    }
  }
}
