import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAddServiceComponent } from './banner-add-service.component';

describe('BannerAddServiceComponent', () => {
  let component: BannerAddServiceComponent;
  let fixture: ComponentFixture<BannerAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAddServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
