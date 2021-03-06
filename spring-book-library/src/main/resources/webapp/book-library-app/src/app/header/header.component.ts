import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  openHome(): void {
    this.router.navigate(['home']);
  }

  listBooks(): void {
    this.router.navigate(['books']);
  }

  listLists(): void {
    this.router.navigate(['lists']);
  }

}
