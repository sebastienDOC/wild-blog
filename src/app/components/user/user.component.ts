import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      credentials: this.fb.group({
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
    })
  }

  onSubmit() {
    console.log(this.userForm.value)
  }
}
