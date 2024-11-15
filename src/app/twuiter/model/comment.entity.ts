export class CommentEntity {
  description: string;
  recipient_id: string;
  type: string;

  constructor(commentEntity: {description?: string, recipient_id?: string,
    type?: string,}) {

    this.description = commentEntity.description || "";
    this.recipient_id = commentEntity.recipient_id || "";
    this.type = commentEntity.type || "";
  }

}
