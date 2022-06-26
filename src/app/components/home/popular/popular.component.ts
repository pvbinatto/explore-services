import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { }

  @ViewChild('tasknote') input: ElementRef;

  featured = [
    {
      id: 1,
      name: 'Bayley Robertson',
      category: 'Barcley',
      tags: ['agência', 'marketing', "brand"],
      images: ['1_1.jpg','1_2.jpg','1_3.jpg','1_4.jpg'],
      slug: 'bayley-robertson',
      rating: 5,
      liked: 1
    },
    {
      id: 2,
      name: 'Sinaps Tynes',
      category: 'Software',
      tags: ['erp', 'job', "website"],
      images: ['2_1.jpg','2_2.jpg'],
      slug: 'sinaps-tynes',
      rating: 3,
      liked: 0
    },
    {
      id: 3,
      name: 'Sinaps Tynes',
      category: 'Software',
      tags: ['erp', 'job', "website"],
      images: ['3_1.jpg','3_2.jpg'],
      slug: 'sinaps-tynes',
      rating: 4,
      liked: 1
    },
    {
      id: 1,
      name: 'Bayley Robertson',
      category: 'Barcley',
      tags: ['agência', 'marketing', "brand"],
      images: ['1_1.jpg','1_2.jpg','1_3.jpg','1_4.jpg'],
      slug: 'bayley-robertson',
      rating: 5,
      liked: 1
    },
    {
      id: 2,
      name: 'Sinaps Tynes',
      category: 'Software',
      tags: ['erp', 'job', "website"],
      images: ['2_1.jpg','2_2.jpg'],
      slug: 'sinaps-tynes',
      rating: 3,
      liked: 0
    },
    {
      id: 3,
      name: 'Sinaps Tynes',
      category: 'Software',
      tags: ['erp', 'job', "website"],
      images: ['3_1.jpg','3_2.jpg'],
      slug: 'sinaps-tynes',
      rating: 4,
      liked: 1
    },
  ];

  clickArrow(div: any, dot: any){
    let margin = 0;
    let el = document.getElementById(div); 
    margin = dot * -422;
    el.style.marginLeft = margin+"px";
  }

  ngOnInit(): void {



  }

}
