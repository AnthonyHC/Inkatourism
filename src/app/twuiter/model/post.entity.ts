import {CommentEntity} from './comment.entity';

export class PostEntity {
  id: string;
  description: string;
  url_video: string;
  url_imagen: string;
  place: string;
  recipientId: string;
  type: string;
  comments: Array<CommentEntity>;

  constructor(postEntity: {id?: string, description?: string, url_video?: string,
    url_imagen?: string, place?: string, recipientId?: string, type?: string,
    comments?: Array<CommentEntity>}) {

    this.id = postEntity.id || "";
    this.description = postEntity.description || "";
    this.url_video = postEntity.url_video || "";
    this.url_imagen = postEntity.url_imagen || "";
    this.place = postEntity.place || "";
    this.recipientId = postEntity.recipientId || "";
    this.type = postEntity.type || "";
    this.comments = postEntity.comments || [];
  }

}
