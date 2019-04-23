import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderApplicationFormComponent } from './provider-application-form.component';

describe('ProviderApplicationFormComponent', () => {
  let component: ProviderApplicationFormComponent;
  let fixture: ComponentFixture<ProviderApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
