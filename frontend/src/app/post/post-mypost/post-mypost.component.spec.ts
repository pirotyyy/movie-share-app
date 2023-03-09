import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMypostComponent } from './post-mypost.component';

describe('PostMypostComponent', () => {
  let component: PostMypostComponent;
  let fixture: ComponentFixture<PostMypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMypostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
