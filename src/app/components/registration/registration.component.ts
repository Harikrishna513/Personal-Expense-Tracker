import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService) { }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.userService.registerUser(user).subscribe(
      response => {
        console.log('Registration successful', response);
        // Handle successful registration
      },
      error => {
        console.error('Error during registration', error);
        // Handle registration error
      }
    );
  }
}
