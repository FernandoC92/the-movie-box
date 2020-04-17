import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMoviesComponent } from './grid-movies.component';

describe('GridMoviesComponent', () => {
  let component: GridMoviesComponent;
  let fixture: ComponentFixture<GridMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
