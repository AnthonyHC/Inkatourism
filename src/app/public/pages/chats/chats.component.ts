import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de tener FormsModule
import { MatButtonModule } from '@angular/material/button';  // Para botones
import { MatFormFieldModule } from '@angular/material/form-field';  // Para mat-form-field
import { MatInputModule } from '@angular/material/input';  // Para matInput

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ChatComponent {
  messages = [
    { user: 'Alice', message: 'Hey, how are you?', time: '10:15 AM' },
    { user: 'Bob', message: 'I\'m good, thanks! You?', time: '10:16 AM' },
    { user: 'Alice', message: 'Doing great, just working on a project.', time: '10:17 AM' },
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        user: 'You',
        message: this.newMessage,
        time: new Date().toLocaleTimeString(),
      });
      this.newMessage = ''; // Limpiar el campo después de enviar el mensaje
    }
  }
}
