import {Message} from './message.entity';

export class Chat {
  id: string;
  recipientId1: string;
  type_1: string;
  recipientId2: string;
  type_2: string;
  messages: Array<Message>;

  constructor(chat: {id?: string, recipientId1?: string, type_1?: string, recipientId2?: string, type_2?: string, messages?: Array<Message>}) {
    this.id = chat.id || '';
    this.recipientId1 = chat.recipientId1 || '';
    this.type_1 = chat.type_1 || '';
    this.recipientId2 = chat.recipientId2 || '';
    this.type_2 = chat.type_2 || '';
    this.messages = chat.messages || [];
  }
}
