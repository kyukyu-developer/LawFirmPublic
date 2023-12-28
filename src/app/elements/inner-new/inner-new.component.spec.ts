import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerNewComponent } from './inner-new.component';

describe('InnerNewComponent', () => {
  let component: InnerNewComponent;
  let fixture: ComponentFixture<InnerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
