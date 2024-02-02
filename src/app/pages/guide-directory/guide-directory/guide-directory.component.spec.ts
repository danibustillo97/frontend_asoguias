import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDirectoryComponent } from './guide-directory.component';

describe('GuideDirectoryComponent', () => {
  let component: GuideDirectoryComponent;
  let fixture: ComponentFixture<GuideDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
