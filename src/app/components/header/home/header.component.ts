import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  completo = true;
  logo = "assets/images/logo-alt.png";

  toggle = false;

  toggleMobile(){
    console.log('aq')
    this.toggle = (this.toggle ? this.toggle = false : this.toggle = true);
    console.log(this.toggle);
  }

  ngOnInit(): void {
    console.log(this.toggle)
  }

}
