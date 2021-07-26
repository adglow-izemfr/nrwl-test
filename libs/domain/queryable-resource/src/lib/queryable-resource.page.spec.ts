import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryableResourcePage } from './queryable-resource.page';

describe('QueryableResourcePage', () => {
  let component: QueryableResourcePage;
  let fixture: ComponentFixture<QueryableResourcePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryableResourcePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryableResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
