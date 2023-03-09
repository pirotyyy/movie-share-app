import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts?: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postService.getAll().subscribe({
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
