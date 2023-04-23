import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesListComponent } from './groceries-list.component';

describe('GroceriesListComponent', () => {
  let component: GroceriesListComponent;
  let fixture: ComponentFixture<GroceriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
