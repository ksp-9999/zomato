import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit{
constructor(private master:MasterService){
}
restaurantsInLocation:any[]=[]
category:any[]=[]
ngOnInit(): void {  
  this.getAllFoodData()
  this.restaurantsInLocation=this.master.restaurants.hyderabad
  console.log(this.restaurantsInLocation);
  
}
getAllFoodData(){
  this.master.getAllFoodItems().subscribe((result:any)=>{
    this.category=result.data;    
  })  
}
navigate(cat:any){
  
}
}
