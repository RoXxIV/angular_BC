import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateshopDetailsComponent } from './skateshop-details.component';

describe('SkateshopDetailsComponent', () => {
  let component: SkateshopDetailsComponent;
  let fixture: ComponentFixture<SkateshopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateshopDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateshopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
