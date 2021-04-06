import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateshopComponent } from './skateshop.component';

describe('SkateshopComponent', () => {
  let component: SkateshopComponent;
  let fixture: ComponentFixture<SkateshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
