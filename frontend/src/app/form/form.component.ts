import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from  '@angular/forms'
import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  title:any;
  formMode:any;

  ngOnInit(): void {
    console.log(this.apiservice.rowData.id);
    //window.location.reload();
    //this.userData.value.id=this.apiservice.rowData.id;
    this.userData.patchValue(this.apiservice.rowData);
    this.title=(this.userData.value.id)?"Update":"Add";
    this.formMode=(this.userData.value.id)?"UPDATE":"ADD";
  }

  userData=new FormGroup({
          id: new FormControl(''),
          first_name: new FormControl('',[Validators.required]),
          last_name: new FormControl('',[Validators.required]),
          age: new FormControl('',[Validators.required]),
          email: new FormControl('',[Validators.required,Validators.email]),
          phone_no: new FormControl('',[Validators.required,Validators.maxLength(15)]),
          location: new FormControl('',[Validators.required])
  });

  //title=this.userData.value.id;

  get first_name()
  {
    return this.userData.get('first_name');
  }
  get last_name()
  {
    return this.userData.get('last_name');
  }
  get age()
  {
    return this.userData.get('age');
  }
  get email()
  {
    return this.userData.get('email');
  }
  get phone_no()
  {
    return this.userData.get('phone_no');
  }
  get location()
  {
    return this.userData.get('location');
  }

  
  sendData()
  {
    //console.log(JSON.stringify(this.userData.value));
    let data=JSON.stringify(this.userData.value);
    console.log(data);
    console.log(this.formMode);
    if(this.formMode=="ADD"){
      this.apiservice.createUser(data).subscribe((user: any)=>{
        console.log("user created");
        alert("Data has been registered successfully");
        window.location.reload();
      });
    }
    else{
      this.apiservice.updateUser(data).subscribe((user:any)=>{
        console.log("user updated");
        alert("User data has been updated successfully");
        window.location.reload();
      });
    }
   
  }

}
