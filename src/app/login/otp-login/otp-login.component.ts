import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AuthenticationService } from '../../core/authentication/authentication.service';
import { MatFormField, MatPrefix, MatLabel, MatError } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatProgressBar } from '@angular/material/progress-bar';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatPrefix,
    FaIconComponent,
    MatProgressSpinner,
    MatProgressBar
  ]
})
export class OtpLoginComponent {
  emailForm: FormGroup;
  otpForm: FormGroup;
  loading = false;
  otpSent = false;
  email = '';
  errorMessage = '';

  @Output() backToLogin = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  requestOTP() {
    this.loading = true;
    this.errorMessage = '';
    this.email = this.emailForm.value.email;
    this.authenticationService
      .requestLoginOTP(this.email)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.otpSent = true;
        },
        error: (err) => {
          this.errorMessage = err?.error?.defaultUserMessage || err?.error?.message || 'Failed to send OTP. Please try again.';
        }
      });
  }

  validateOTP() {
    this.loading = true;
    this.errorMessage = '';
    this.authenticationService
      .validateLoginOTP(this.email, this.otpForm.value.otp)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        error: (err) => {
          this.errorMessage = err?.error?.defaultUserMessage || err?.error?.message || 'Invalid OTP. Please try again.';
        }
      });
  }

  resendOTP() {
    this.loading = true;
    this.errorMessage = '';
    this.authenticationService
      .requestLoginOTP(this.email)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.errorMessage = '';
        },
        error: (err) => {
          this.errorMessage = err?.error?.defaultUserMessage || err?.error?.message || 'Failed to resend OTP.';
        }
      });
  }

  changeEmail() {
    this.otpSent = false;
    this.otpForm.reset();
    this.errorMessage = '';
  }
}
