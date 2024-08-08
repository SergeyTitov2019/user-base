import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectivesTestComponent } from './derectives-test.component';

describe('DerectivesTestComponent', () => {
  let component: DerectivesTestComponent;
  let fixture: ComponentFixture<DerectivesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerectivesTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DerectivesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
