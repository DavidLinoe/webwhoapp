import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreDocComponent } from './doc.component';

describe('SemaphoreDocComponent', () => {
  let component: SemaphoreDocComponent;
  let fixture: ComponentFixture<SemaphoreDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaphoreDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaphoreDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
