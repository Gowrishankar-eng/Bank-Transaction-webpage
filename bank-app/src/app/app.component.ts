import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';
  cust={name:null,balance:0,city:null,email:null}
  custarray=[]
  msg=null;
  bal=0
  payee=null
users=[]
display=false;
  constructor(private myapi:ApiService){

  }

  ngOnInit(){
      this.myapi.getdetails().subscribe((data)=>{
        this.custarray=data;
        this.users =data.map((a)=>{
             return a.name
        })
        
      })
  }

view(a){
 this.cust ={name:a.name, balance:a.balance, city:a.city,email:a.email}
 this.users= this.users.filter((b)=>{
   return a.name!=b;
 })
}
showpayee(){
  console.log(this.users);
  this.display=true;
}

finish(a){
  if(this.bal==0){
    this.msg="Please enter valid amount"
 
  }
if(a<this.bal ){
  this.msg="Insufficient balance"
 
  
}else{
  this.msg="Payment Done."
}

  
}
}
