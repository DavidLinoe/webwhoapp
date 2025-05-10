import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreProgressComponent } from './progress.component';

describe('SemaphoreProgressComponent', () => {
  let component: SemaphoreProgressComponent;
  let fixture: ComponentFixture<SemaphoreProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaphoreProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaphoreProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
