import { Component, OnInit } from '@angular/core';
import { HomePageService } from "../home-page/home-page.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing-component.component.html',
  styleUrls: ['./listing-component.component.css']
})
export class ListingComponentComponent implements OnInit {

  gituser:any;
  loaded=false;
  errors=false;
  name: any;
  repos:any;
  orepos:any;
  limit=0;
  count=1
  searchtext;
  repo=[1,2,3,4]
  constructor(private restapi:HomePageService,private route:ActivatedRoute,private router:Router) {
    router.events.subscribe((val) => {
      this.ngOnInit() 
  });
   }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('userName');
    this.restapi.getUserdetails(this.name).subscribe(
      result=>{
        this.gituser=result
        this.restapi.getUserRepo(this.name).subscribe(
          data=>{
            this.orepos=data
            var demo=[];
            for(var i=0;i<this.orepos.length;i++){
              demo.push(this.orepos[i])
            }
            this.orepos = demo
            this.repos = this.orepos.slice(0,10)
            this.limit = Math.ceil(this.orepos.length/10)
            console.log(this.limit)
            
              this.loaded=true
            
          },err=>{
            console.log(err)
          }
        )
      },error=>{
        console.log(error)
        this.loaded=true
        this.errors=true
        this.limit=0
      }
    )
  }
  next(){
    var min = this.count*10
    this.count++;
    var max = this.count*10
    this.repos = this.orepos.slice(min,max)
  }
  previous(){
    this.count--;
    var max=this.count*10
    var min=this.count-1
    min *=10
    this.repos = this.orepos.slice(min,max)
  }
  onKeypressEvent(event){
    if(event.charCode == 13){
      this.repos = this.orepos.filter((val) => val.name.toLowerCase().includes(this.searchtext));
    }
    console.log(event)
  }

}
