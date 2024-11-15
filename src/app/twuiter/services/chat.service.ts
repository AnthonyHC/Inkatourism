import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Chat} from '../model/chat.entity';
import {Message} from '../model/message.entity';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService extends BaseService<Chat>{

  constructor(http: HttpClient) {
    super();
    this.resourceEndPoint='/chats';
  }

  addMessage(chatId: string, message: Message): Observable<Chat> {
    const url = `${environment.serverBasePath}${this.resourceEndPoint}/${chatId}/messages`;
    return this.http.post<Chat>(url, message);
  }
}
