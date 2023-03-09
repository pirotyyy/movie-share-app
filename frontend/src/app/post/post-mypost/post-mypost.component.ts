import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-mypost',
  templateUrl: './post-mypost.component.html',
  styleUrls: ['./post-mypost.component.css'],
})
export class PostMypostComponent implements OnInit {
  myUser: any;
  posts?: Post[];

  constructor(private postService: PostService, private auth: AuthService) {}

  ngOnInit(): void {
    this.myUser = this.auth.getUsername();
    this.retrieveMyPosts(this.myUser);
  }

  retrieveMyPosts(username: string): void {
    this.postService.getPostByUsername(username).subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (e) => console.log(e),
    });
  }

  arrayNumberLength(number: number): any[] {
    return [...Array(number)];
  }
}
