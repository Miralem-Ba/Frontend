import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { authorizationInterceptor } from './authorization.interceptor';

// Unit test for the authorizationInterceptor
describe('authorizationInterceptor', () => {
  // Wrap the interceptor in TestBed's runInInjectionContext for testing
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authorizationInterceptor(req, next));

  beforeEach(() => {
    // Configure testing module
    TestBed.configureTestingModule({});
  });

  // Test to verify interceptor creation
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
