import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibButton } from './button';

describe('LibButton', () => {
  let component: LibButton;
  let fixture: ComponentFixture<LibButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
