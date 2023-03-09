import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post = new Post(0, '', '', '', '', 0, '');

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id: any): void {
    this.postService.get(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (error) => console.log(error),
    });
  }

  arrayNumberLength(number: number): any[] {
    return [...Array(number)];
  }
}
