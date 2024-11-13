import {Component, OnInit} from '@angular/core';
import {MatLine} from '@angular/material/core';
import {MatIcon} from '@angular/material/icon';
import {NgForOf} from '@angular/common';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCard, MatCardContent} from '@angular/material/card';

interface Notification {
  message: string;
  icon: string;
  type: 'info' | 'success' | 'warning'; // Añadimos un tipo de notificación
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatList,
    MatListItem,
    NgForOf,
    MatIcon,
    MatLine
  ],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [
    {
      message: '@Alan Garcia ha comentado tu hilo',
      icon: 'notification_important',
      type: 'warning'
    },
    {
      message: 'El evento del año ha sido anunciado.',
      icon: 'event',
      type: 'info'
    },
    {
      message: '@Lebron James te ha empezado a seguir',
      icon: 'celebration',
      type: 'success'
    },
    {
      message: 'Tu publicación ha sido retuiteada por @CamilaPerez',
      icon: 'repeat',
      type: 'success'
    },
    {
      message: '@Carlos Mendez ha mencionado en tu comentario',
      icon: 'comment',
      type: 'info'
    },
    {
      message: '¡Tienes 5 nuevas solicitudes de amistad!',
      icon: 'group_add',
      type: 'warning'
    },
    {
      message: 'Tu perfil ha sido verificado.',
      icon: 'verified',
      type: 'success'
    },
    {
      message: 'Recuerda que tienes una reunión programada para mañana a las 10:00 AM.',
      icon: 'event_note',
      type: 'info'
    },
    {
      message: '@Ana Martinez ha reaccionado a tu tweet',
      icon: 'thumb_up',
      type: 'success'
    },
    {
      message: 'Tu tweet ha alcanzado 100 likes, ¡enhorabuena!',
      icon: 'favorite',
      type: 'success'
    },
    {
      message: '@Juan Perez ha comenzado a seguirte',
      icon: 'follow_the_signs',
      type: 'success'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
