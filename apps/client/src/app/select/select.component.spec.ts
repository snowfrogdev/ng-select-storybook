import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InSelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: InSelectComponent;
  let fixture: ComponentFixture<InSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
