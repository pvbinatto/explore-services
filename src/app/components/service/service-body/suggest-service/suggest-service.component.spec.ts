import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestServiceComponent } from './suggest-service.component';

describe('SuggestServiceComponent', () => {
  let component: SuggestServiceComponent;
  let fixture: ComponentFixture<SuggestServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
