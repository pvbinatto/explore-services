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

  verificaAlturaDaTela(altura: any) {
    if (altura > 80) {
      console.log('maior');
      this.completo = false;
      this.logo = "assets/images/logo.png";
    } else {
      this.completo = true;
      console.log('menor');
      this.logo = "assets/images/logo-alt.png";
    }
  }

  ngOnInit(): void {
    console.log(this.completo)
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
    this.verificaAlturaDaTela(window.scrollY);
  } 

}
