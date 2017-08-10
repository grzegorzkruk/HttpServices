import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisticPostComponent } from './optimistic-post.component';

describe('OptimisticPostComponent', () => {
  let component: OptimisticPostComponent;
  let fixture: ComponentFixture<OptimisticPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimisticPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisticPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
