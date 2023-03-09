import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostMypostComponent } from './post/post-mypost/post-mypost.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myposts', component: PostMypostComponent, canActivate: [AuthGuard] },
  {
    path: 'myposts/edit/:id',
    component: PostEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard] },
  {
    path: 'posts/detail/:id',
    component: PostDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/create',
    component: PostCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
