import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalLayoutComponent } from './crystal-layout.component';

describe('CrystalLayoutComponent', () => {
  let component: CrystalLayoutComponent;
  let fixture: ComponentFixture<CrystalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
