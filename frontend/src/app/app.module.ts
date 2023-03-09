import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';

import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostService } from './shared/services/post.service';
import { PostMypostComponent } from './post/post-mypost/post-mypost.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    AuthComponent,
    HomeComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostMypostComponent,
    PostEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
