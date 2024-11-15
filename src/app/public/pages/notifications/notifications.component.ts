import {Component, OnInit} from '@angular/core';
import {MatLine} from '@angular/material/core';
import {MatIcon} from '@angular/material/icon';
import {NgForOf} from '@angular/common';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCard, MatCardContent} from '@angular/material/card';
import {NotificationEntity} from '../../../twuiter/model/notification.entity';
import {NotificationService} from '../../../twuiter/services/notification.service';

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
  notifications: Array<NotificationEntity> = [];
  // userId = sessionStorage.getItem('id').toString();
  userId = "6715e4ae4207fc3afdb56c13";

  constructor(private notificationsApiService: NotificationService) {}

  ngOnInit(): void {
    this.getAllNotifications();
  }

  private getAllNotifications() {
    this.notificationsApiService.getAll().subscribe((response: Array<NotificationEntity>) => {
      this.notifications = response.filter(notification => (notification.recipient_id.toString() === this.userId.toString()));
      console.log(this.notifications);
    })
  }


}
