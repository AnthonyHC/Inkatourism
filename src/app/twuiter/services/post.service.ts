import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {PostEntity} from '../model/post.entity';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<PostEntity>{

  constructor() {
    super();
    this.resourceEndPoint='/posts'
  }
}
