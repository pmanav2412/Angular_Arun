import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  constructor() { }

  @Input() rating : number;

  ratingArr : any;


  ngOnInit() {
    this.ratingArr = Array(Math.round(this.rating)).fill('Manav');
   
  }

}
