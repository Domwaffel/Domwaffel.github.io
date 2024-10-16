import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftWrappingComponent } from './gift-wrapping.component';

describe('GiftWrappingComponent', () => {
  let component: GiftWrappingComponent;
  let fixture: ComponentFixture<GiftWrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftWrappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftWrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
