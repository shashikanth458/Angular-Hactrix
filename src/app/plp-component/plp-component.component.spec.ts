import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlpComponentComponent } from './plp-component.component';

describe('PlpComponentComponent', () => {
  let component: PlpComponentComponent;
  let fixture: ComponentFixture<PlpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
