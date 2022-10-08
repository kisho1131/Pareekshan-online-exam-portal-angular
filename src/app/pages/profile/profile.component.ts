import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | any;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getUserDetails();
    this.loginService.getCurrentUser().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        Swal.fire('Error Loding Profile Details !', '', 'error');
      }
    );
    // if (this.loginService.getUserDetails() != null) {
    //   this.user = this.loginService.getUserDetails();
    // }
  }
}
