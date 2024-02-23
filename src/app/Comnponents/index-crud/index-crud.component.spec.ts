import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCrudComponent } from './index-crud.component';

describe('IndexCrudComponent', () => {
  let component: IndexCrudComponent;
  let fixture: ComponentFixture<IndexCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
