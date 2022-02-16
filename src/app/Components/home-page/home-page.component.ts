import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  githubUsername:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onKeypressEvent(event){
    if(event.charCode == 13){
      console.log(this.githubUsername)
      this.route.navigate([this.githubUsername + '/Dashboard']);
    }
  }
}
