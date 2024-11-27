import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliComponent } from './ali.component';

describe('AliComponent', () => {
  let component: AliComponent;
  let fixture: ComponentFixture<AliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
