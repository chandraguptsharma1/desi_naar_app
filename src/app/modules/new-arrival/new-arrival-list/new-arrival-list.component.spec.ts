import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalListComponent } from './new-arrival-list.component';

describe('NewArrivalListComponent', () => {
  let component: NewArrivalListComponent;
  let fixture: ComponentFixture<NewArrivalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewArrivalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
