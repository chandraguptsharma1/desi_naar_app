import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookAboutusComponent } from './lookbook-aboutus.component';

describe('LookbookAboutusComponent', () => {
  let component: LookbookAboutusComponent;
  let fixture: ComponentFixture<LookbookAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LookbookAboutusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookbookAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
