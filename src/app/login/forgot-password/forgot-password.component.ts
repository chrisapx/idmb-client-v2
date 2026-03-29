import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AuthenticationService } from '../../core/authentication/authentication.service';
import { MatFormField, MatPrefix, MatLabel, MatError } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatPrefix,
    FaIconComponent,
    MatProgressSpinner
  ]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading = false;
  emailSent = false;
  errorMessage = '';

  @Output() backToLogin = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitRequest() {
    this.loading = true;
    this.errorMessage = '';
    this.authenticationService
      .requestPasswordReset(this.forgotPasswordForm.value.email)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: () => {
          this.emailSent = true;
        },
        error: (err) => {
          this.errorMessage = err?.error?.defaultUserMessage || err?.error?.message || 'Failed to send reset link. Please try again.';
        }
      });
  }
}
