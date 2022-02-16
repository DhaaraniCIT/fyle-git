import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchtext:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onKeypressEvent(event){
    if(event.charCode == 13){
      console.log(this.searchtext)
      this.route.navigate([this.searchtext + '/Dashboard']);
    }
  }
}
