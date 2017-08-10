import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BadInputError } from './../../common/bad-input-error';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'my-optimistic-post',
  templateUrl: './optimistic-post.component.html',
  styleUrls: ['./optimistic-post.component.css']
})
export class OptimisticPostComponent implements OnInit {
  posts: any[];
  

  constructor(private service: PostService) {
  }

  CreatePost(input: HTMLInputElement){
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0,1); //delete from posts if error occur

          if (error instanceof BadInputError){
            //this.platformBrowserDynamic.setErrors(error.originalError);
            //this.form.setErrors(error.json());
          }
          else throw error;
        });
  }
  UpdatePost(post){
    this.service.update(post)
      .subscribe(
        updatedPost =>{
          console.log(updatedPost);
        }
      );
    //this.http.put(this.url, JSON.stringify(post))
  }
  DeletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError){
            alert('This post has already been deleted');
          }else throw error;
        }
      );
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe( posts => this.posts = posts );
  }

}
