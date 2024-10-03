import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    credentials: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  })

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value)
  }
}
