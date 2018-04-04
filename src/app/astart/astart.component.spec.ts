import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstartComponent } from './astart.component';

describe('AstartComponent', () => {
  let component: AstartComponent;
  let fixture: ComponentFixture<AstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
