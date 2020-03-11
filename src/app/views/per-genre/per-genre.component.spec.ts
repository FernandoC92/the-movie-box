import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerGenreComponent } from './per-genre.component';

describe('PerGenreComponent', () => {
  let component: PerGenreComponent;
  let fixture: ComponentFixture<PerGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
