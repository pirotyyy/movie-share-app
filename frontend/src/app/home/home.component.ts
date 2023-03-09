import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Post } from '../models/post.model';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myPosts: Post[] = [];
  constructor(public auth: AuthService, private postService: PostService) {}
}
