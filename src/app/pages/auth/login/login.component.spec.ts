import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

// Unit test suite for LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    // Set up the TestBed with the LoginComponent
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
      .compileComponents();

    // Create a fixture instance for LoginComponent
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  // Test case to check if the component creates successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
