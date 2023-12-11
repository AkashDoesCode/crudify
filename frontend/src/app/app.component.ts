import { Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   title = 'front';
  // users: User[] =[{id : 1 , name: null, age: null}] ;
  // selectedUser: User = { id : null , name: null, age: null};
  constructor(private router : Router) { }

  

  ngOnInit() {

    this.router.navigate(['']);
  }
  

  // create(form:any){
  //     console.log(form.value);
  //     this.apiService.createUser(form.value).subscribe((user: User)=>{
  //       console.log("user created, ", user);
  //       window.location.reload();
  //     });

  // }

  // selectPolicy(user: User){
  //   this.selectedUser = user;
  // }

}
