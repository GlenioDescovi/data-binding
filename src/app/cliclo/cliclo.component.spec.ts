import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicloComponent } from './cliclo.component';

describe('ClicloComponent', () => {
  let component: ClicloComponent;
  let fixture: ComponentFixture<ClicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
