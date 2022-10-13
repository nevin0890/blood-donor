import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name = "";
  bloodGroup = "";
  dob = "";
  lstdate = "";
  prevdis = "";
  lasvacc = "";
  address = "";
  pincode = "";
  mobile = "";
  email = "";

  readvalues = () => {
    let data = {
      "name": this.name,
      "bloodGroup": this.bloodGroup,
      "dob": this.dob,
      "lstdate": this.lstdate,
      "prevdis": this.prevdis,
      "lasvacc": this.lasvacc,
      "address": this.address,
      "pincode": this.pincode,
      "mobile": this.mobile,
      "email": this.email

    }
    console.log(data);
  }
  

  ngOnInit(): void {
  }

}
