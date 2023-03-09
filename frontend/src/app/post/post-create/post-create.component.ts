import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  createForm: any;
  currentUser: any;
  formData: any = {};
  errors: any = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {
    this.currentUser = auth.getUsername();
    this.initForm();
  }

  initForm(): void {
    this.createForm = this.fb.group({
      post_title: [''],
      author: [this.currentUser],
      movie: [''],
      evaluation: [''],
      impression: [''],
    });
  }

  create(): void {
    this.postService.post(this.createForm.value).subscribe({
      next: () => {
        this.router.navigate(['posts'], {
          queryParams: { created: 'success' },
        });
      },
      error: (error) => {
        this.errors.push(error.error.error);
      },
    });
  }
}
