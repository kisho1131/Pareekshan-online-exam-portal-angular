import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginRequest = {
    username: '',
    password: '',
  };
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    if (
      this.loginRequest.username.trim() == '' ||
      this.loginRequest.password.trim() == ''
    ) {
      Swal.fire("username Or password can't be Blank", '', 'error');
      return;
    }
    this.loginService.generateToken(this.loginRequest).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.setToken(data.token);

        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUserDetails(user);
          console.log(user);
          /*
            Redirect  ==> to the Dashboard based on the Role.
            If Admin  ==> Redirect to Admin Dashboard.
            If Normal ==> Redirect to the User Dashboard.
            */
          if (this.loginService.getUserRole() == 'ADMIN') {
            this.router.navigate(['/admin-dashboard']);
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            this.router.navigate(['user-dashboard']);
          } else {
            this.loginService.logout();
          }
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Invalid Credentials !!', '', 'error');
      }
    );
  }

  ngOnInit(): void {}
}
