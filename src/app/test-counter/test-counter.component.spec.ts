import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCounterComponent } from './test-counter.component';

describe('TestCounterComponent', () => {
  let component: TestCounterComponent;
  let fixture: ComponentFixture<TestCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
