import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDComponent } from './site-d.component';

describe('SiteDComponent', () => {
  let component: SiteDComponent;
  let fixture: ComponentFixture<SiteDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
