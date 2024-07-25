import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  onLogin() {
    this.userService.getUser(this.username).subscribe(
      user => {
        if (user && user.password === this.password) {
          console.log('Login successful');
          // Handle successful login
        } else {
          alert('Invalid username or password');
        }
      },
      error => {
        console.error('Error during login', error);
        // Handle login error
      }
    );
  }
}
