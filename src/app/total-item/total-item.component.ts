import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'total-item',
  templateUrl: './total-item.component.html',
  styleUrls: ['./total-item.component.css']
})
export class TotalItemComponent implements OnInit {
  @Input() title: string='';
  @Input() count: number = 0;
  @Input() myColor : string = 'lightGray';
  
  constructor(private title1:Title) {
    console.log(title1.getTitle());
   }

  ngOnInit() {
  }

}
