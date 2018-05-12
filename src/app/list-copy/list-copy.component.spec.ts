import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCopyComponent } from './list-copy.component';

describe('ListCopyComponent', () => {
  let component: ListCopyComponent;
  let fixture: ComponentFixture<ListCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
