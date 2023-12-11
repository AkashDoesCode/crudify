import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    
  }

  mouseEnter(event :any)
  {
    console.log("hi");
  }

}
