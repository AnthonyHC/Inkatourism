import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Company} from '../model/company.entity';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService extends BaseService<Company>{

  constructor() {
    super();
    this.resourceEndPoint='/companies';
  }
}
