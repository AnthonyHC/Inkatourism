import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {NotificationEntity} from '../model/notification.entity'

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<NotificationEntity>{

  constructor() {
    super();
    this.resourceEndPoint='/notifications'
  }
}
