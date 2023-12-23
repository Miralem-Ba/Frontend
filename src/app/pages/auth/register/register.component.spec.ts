import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

// Test suite for RegisterComponent
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    // Configure the testing module with the RegisterComponent
    await TestBed.configureTestingModule({
      imports: [RegisterComponent]
    })
      .compileComponents();

    // Create an instance of the component for testing
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
