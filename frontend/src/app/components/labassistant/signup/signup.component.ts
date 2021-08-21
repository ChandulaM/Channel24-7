import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string = "";
  mobileNum:string = "";
  password:string = "";
  cpassword:string = "";

  ngOnInit(): void {
  }

  submit():void{
    alert(this.email);
  }

  updateEmail($event:any):void{
    this.email = ($event.target.value);
  }

  updateMobile($event:any):void{
    this.mobileNum = ($event.target.value);
  }

  updatePassword($event:any):void{
    this.password = ($event.target.value);
  }

  updateCPassword($event:any):void{
    this.cpassword = ($event.target.value);
  }

}
