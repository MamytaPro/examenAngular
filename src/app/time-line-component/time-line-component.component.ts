import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../models/Publication.models';

@Component({
  selector: 'app-time-line-component',
  templateUrl: './time-line-component.component.html',
  styleUrls: ['./time-line-component.component.scss']
})
export class TimeLineComponentComponent implements OnInit {
 @Input()  pub!: Publication;
 buttonTest!: string;
  constructor() { }

  ngOnInit(): void {
    this.buttonTest="Like"
  }
  onAddLike(): void{
    if(this.buttonTest ==="Like"){
      this.pub.nbLike++;
      this.buttonTest="Dislike"
    }
    else{
      this.pub.nbLike--;
      this.buttonTest="Like"
    }
  }
}
