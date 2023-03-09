import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  errors: any = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  register(): void {
    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/auth/login'], {
          queryParams: { registered: 'success' },
        });
      },
      error: (error) => {
        console.log(error);
        this.errors.push(error.error.detail);
      },
    });
  }
}
