import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbarhComponent } from './dasbarh.component';

describe('DasbarhComponent', () => {
  let component: DasbarhComponent;
  let fixture: ComponentFixture<DasbarhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbarhComponent]
    });
    fixture = TestBed.createComponent(DasbarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
