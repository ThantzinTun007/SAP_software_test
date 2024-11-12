import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersScreenComponent } from './partners-screen.component';

describe('PartnersScreenComponent', () => {
  let component: PartnersScreenComponent;
  let fixture: ComponentFixture<PartnersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
