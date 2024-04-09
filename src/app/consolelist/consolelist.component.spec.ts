import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolelistComponent } from './consolelist.component';

describe('ConsolelistComponent', () => {
  let component: ConsolelistComponent;
  let fixture: ComponentFixture<ConsolelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolelistComponent]
    });
    fixture = TestBed.createComponent(ConsolelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
