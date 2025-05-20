import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMComponent } from './show-m.component';

describe('ShowMComponent', () => {
  let component: ShowMComponent;
  let fixture: ComponentFixture<ShowMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
