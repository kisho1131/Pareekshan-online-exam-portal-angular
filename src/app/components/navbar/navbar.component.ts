import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public loginService: LoginService, private router: Router) {}

  sessionLogout() {
    this.loginService.logout();
    window.localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
