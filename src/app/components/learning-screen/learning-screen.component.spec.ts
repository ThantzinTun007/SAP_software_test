import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningScreenComponent } from './learning-screen.component';

describe('LearningScreenComponent', () => {
  let component: LearningScreenComponent;
  let fixture: ComponentFixture<LearningScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
