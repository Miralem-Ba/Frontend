import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

// Unit test suite for FooterComponent
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  // Setting up the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
      .compileComponents();

    // Creating a test fixture
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance; // Instance of the component
    fixture.detectChanges(); // Triggering change detection
  });

  // Test to ensure component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
