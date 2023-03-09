import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent {
  editForm = this.fb.group({
    post_title: [''],
    author: [''],
    movie: [''],
    evaluation: 0,
    impression: [''],
  });

  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.postService.get(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (data) => {
        this.editForm.setValue({
          post_title: data.post_title,
          author: data.author,
          movie: data.movie,
          evaluation: Number(data.evaluation),
          impression: data.impression,
        });
      },
      error: (error) => {
        console.log('エラーです');
      },
    });
  }

  update(): void {
    this.postService
      .update(this.editForm.value, this.route.snapshot.paramMap.get('id'))
      .subscribe({
        next: () => {
          this.router.navigate(['myposts/'], {
            queryParams: { updated: 'success' },
          });
        },
      });
  }

  delete(): void {
    this.postService.delete(this.route.snapshot.paramMap.get('id')).subscribe({
      next: () => {
        this.router.navigate(['myposts/'], {
          queryParams: { deleted: 'success' },
        });
      },
    });
  }
}
