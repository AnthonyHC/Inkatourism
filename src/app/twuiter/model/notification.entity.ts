export class NotificationEntity {
  id: string;
  description: string;
  recipient_id: string;
  type: string;

  constructor(notification: {id?: string, description?: string, recipient_id?: string, type?: string}) {
    this.id = notification.id || "";
    this.description = notification.description || "";
    this.recipient_id = notification.recipient_id || "";
    this.type = notification.type || "";
  }
}
