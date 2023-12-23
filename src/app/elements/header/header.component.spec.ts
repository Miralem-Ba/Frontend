import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

// Unit test suite for HeaderComponent
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // Setting up the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
      .compileComponents();

    // Creating a test fixture
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // Instance of the component
    fixture.detectChanges(); // Triggering change detection
  });

  // Test to ensure component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
