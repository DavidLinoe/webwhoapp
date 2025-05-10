import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreSlidesComponent } from './slides.component';

describe('SemaphoreSlidesComponent', () => {
  let component: SemaphoreSlidesComponent;
  let fixture: ComponentFixture<SemaphoreSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaphoreSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaphoreSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
