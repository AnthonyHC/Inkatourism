import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {NotificationEntity} from '../model/notification.entity'
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<NotificationEntity>{

  constructor() {
    super();
    this.resourceEndPoint='/notifications'
  }
  getRecipientId(recipientId?: string): Observable<Array<NotificationEntity>> {
    const url = `${environment.serverBasePath}${this.resourceEndPoint}/recipient_id/${recipientId}`;
    return this.http.get<Array<NotificationEntity>>(url);
  }
}
