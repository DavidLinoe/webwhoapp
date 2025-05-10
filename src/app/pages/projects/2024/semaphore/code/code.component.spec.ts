import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreCodeComponent } from './code.component';

describe('SemaphoreCodeComponent', () => {
  let component: SemaphoreCodeComponent;
  let fixture: ComponentFixture<SemaphoreCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaphoreCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaphoreCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
