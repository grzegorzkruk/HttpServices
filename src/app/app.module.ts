import { AppErrorHandler } from './../common/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { OptimisticPostComponent } from './optimistic-post/optimistic-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    OptimisticPostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
