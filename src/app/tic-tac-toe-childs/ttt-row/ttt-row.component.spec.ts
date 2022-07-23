import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TttRowComponent } from './ttt-row.component';

describe('TttRowComponent', () => {
  let component: TttRowComponent;
  let fixture: ComponentFixture<TttRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TttRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TttRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
