import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  onSubmit() {
    if (this.user.userName == '' || this.user.userName == null) {
      this.matSnackBar.open('Username is Required !', '', {
        duration: 2000,
      });
      return;
    }
    this.saveUser();
  }
  saveUser() {
    console.log(this.user);
    // call the addUser Method in UserService.ts to save the user in Backend !
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        // Swal.fire("Registration Successful !", 'success')
        Swal.fire('Registration Successful !!', '', 'success');

        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      },
      (error) => {
        this.matSnackBar.open('Something went wrong, Please Try Again !!', '', {
          duration: 3000,
        });
      }
    );
  }

  ngOnInit(): void {}
}
