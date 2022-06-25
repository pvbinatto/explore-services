import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { }

  featured = [
    {
      id: 1,
      name: 'Bayley Robertson',
      category: 'Barcley',
      tags: ['agência', 'marketing', "brand"],
      images: ['1_1.jpg','1_2.jpg','1_3.jpg','1_4.jpg'],
      slug: 'bayley-robertson'
    },
    {
      id: 2,
      name: 'Sinaps Tynes',
      category: 'Software',
      tags: ['erp', 'job', "website"],
      images: ['2_1.jpg','2_2.jpg'],
      slug: 'sinaps-tynes'
    },
  ]

  ngOnInit(): void {
  }

}
