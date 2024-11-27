import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaminComponent } from './samin.component';

describe('SaminComponent', () => {
  let component: SaminComponent;
  let fixture: ComponentFixture<SaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
