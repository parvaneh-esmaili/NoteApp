import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoroshComponent } from './korosh.component';

describe('KoroshComponent', () => {
  let component: KoroshComponent;
  let fixture: ComponentFixture<KoroshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoroshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoroshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
