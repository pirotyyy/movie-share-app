import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

const baseUrl = 'http://127.0.0.1:8000/api/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  header: any;
  constructor(private http: HttpClient) {
    this.setToken();
  }

  setToken(): void {
    this.header = { Authorization: `JWT ${localStorage.getItem('auth_tkn')}` };
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/list`, {
      headers: this.header,
    });
  }

  get(id: any): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}/detail/${id}`, {
      headers: this.header,
    });
  }

  post(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${baseUrl}/create/`, data, {
      headers: this.header,
    });
  }

  getPostByUsername(username: string): Observable<any> {
    return this.http.get(`${baseUrl}/list/?author=${username}`, {
      headers: this.header,
    });
  }

  update(data: any, id: any): Observable<any> {
    return this.http.put(`${baseUrl}/detail/${id}/edit`, data, {
      headers: this.header,
    });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/detail/${id}/edit`, {
      headers: this.header,
    });
  }
}
