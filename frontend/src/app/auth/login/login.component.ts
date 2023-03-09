import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  errors: any = [];
  notify: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe((params) => {
      const key1 = 'registerd';
      const key2 = 'loggedout';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully registered, Please Log in';
      }
      if (params[key2] === 'success') {
        this.notify = 'You have been loggedout succesefully';
      }
    });
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isValidInput(fieldName: string): boolean {
    return (
      this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty ||
        this.loginForm?.controls[fieldName].touched)
    );
  }

  login(): void {
    this.errors = [];
    this.auth.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/myposts'], {
          queryParams: { loggedin: 'success' },
        });
      },
      error: (error) => {
        this.errors.push(error.error.detail);
      },
    });
  }
}
