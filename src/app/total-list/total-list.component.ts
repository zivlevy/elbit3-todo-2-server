import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'total-list',
  templateUrl: './total-list.component.html',
  styleUrls: ['./total-list.component.css']
})
export class TotalListComponent implements OnInit {
  @Input() total:number=0;
  @Input() compleated:number=0;
  @Input() open:number=0;


  constructor() { }

  ngOnInit() {
  }

}
