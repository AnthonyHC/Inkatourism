import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgForOf} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';
import {NotificationEntity} from '../../../twuiter/model/notification.entity';
import {NotificationService} from '../../../twuiter/services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatIcon
  ],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Array<NotificationEntity> = [];
  userId = sessionStorage.getItem('id');

  constructor(private notificationsApiService: NotificationService) {}

  ngOnInit(): void {
    this.getAllNotifications();
  }

  private getAllNotifications() {
    this.notificationsApiService.getRecipientId(this.userId?.toString()).subscribe((response: Array<NotificationEntity>) => {
      this.notifications = response;
    })
  }
}
