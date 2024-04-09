import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheslistComponent } from './clotheslist.component';

describe('ClotheslistComponent', () => {
  let component: ClotheslistComponent;
  let fixture: ComponentFixture<ClotheslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClotheslistComponent]
    });
    fixture = TestBed.createComponent(ClotheslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
