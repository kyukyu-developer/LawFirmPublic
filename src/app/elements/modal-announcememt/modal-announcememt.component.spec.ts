import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnnouncememtComponent } from './modal-announcememt.component';

describe('ModalAnnouncememtComponent', () => {
  let component: ModalAnnouncememtComponent;
  let fixture: ComponentFixture<ModalAnnouncememtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnnouncememtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnnouncememtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
