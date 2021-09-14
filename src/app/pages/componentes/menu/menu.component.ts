import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['home/pesquisa-usuario'], {skipLocationChange: true});
  }

  goHome(){
    this.router.navigate(['home/index'], {skipLocationChange: true});
  }

  public sair(){
    localStorage.clear()
    this.router.navigate(['login']);
  }
}
