import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pageheading',
  templateUrl: './pageheading.component.html',
  styleUrls: ['./pageheading.component.scss']
})
export class PageheadingComponent implements OnInit {
  @Input() titulo: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
