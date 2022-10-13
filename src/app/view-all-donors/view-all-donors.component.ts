import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-donors',
  templateUrl: './view-all-donors.component.html',
  styleUrls: ['./view-all-donors.component.css']
})
export class ViewAllDonorsComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchDonors();
  }
  
  fetchDonors=()=>{this.api.getDonorsList().subscribe((data)=>{this.donorData=data})}

  donorData:any = [];
  
    
  

  ngOnInit(): void {
  }

}
