import { DataService } from './data.service';
import { AppError } from './../../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
