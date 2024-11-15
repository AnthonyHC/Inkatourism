export class Message {
  description: string;
  recipient_id: string;
  type: string;

  constructor(message: {description?: string, recipient_id?: string, type?: string}) {
    this.description = message.description || '';
    this.recipient_id = message.recipient_id || '';
    this.type = message.type || '';
  }
}
