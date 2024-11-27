import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezaComponent } from './reza.component';

describe('RezaComponent', () => {
  let component: RezaComponent;
  let fixture: ComponentFixture<RezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
