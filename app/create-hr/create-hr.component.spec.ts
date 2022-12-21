import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHrComponent } from './create-hr.component';

describe('CreateHrComponent', () => {
  let component: CreateHrComponent;
  let fixture: ComponentFixture<CreateHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
