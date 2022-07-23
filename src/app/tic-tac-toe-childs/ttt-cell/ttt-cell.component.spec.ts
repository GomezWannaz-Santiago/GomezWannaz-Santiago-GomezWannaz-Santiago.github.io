import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TttCellComponent } from './ttt-cell.component';

describe('TttCellComponent', () => {
  let component: TttCellComponent;
  let fixture: ComponentFixture<TttCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TttCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TttCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
