import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCComponent } from './site-c.component';

describe('SiteCComponent', () => {
  let component: SiteCComponent;
  let fixture: ComponentFixture<SiteCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
