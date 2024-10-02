import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  city = new FormControl('');

  submittedUser!: User

  onSubmit() {
    const address: Address = {
      street: this.street.value || '',
      zipCode: this.zipCode.value || '',
      city: this.city.value || ''
    };

    this.submittedUser = {
      username: this.username.value || '',
      email: this.email.value || '',
      password: this.password.value || '',
      address
    };
  }
}
