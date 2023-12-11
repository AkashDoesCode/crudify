import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import { Router } from '@angular/router';
import { user } from '../user';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private apiservice : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.fetchData();
  }
  
  userData:user[]=[];
  currentPage:number=1;
  totalData:any;
  pages:Array<number>=[];
  start:number=0;
  end:any;
  sevenUserData:user[]=[];



  fetchData()
  {
      this.apiservice.readUser().subscribe((user:any)=>
      {
        this.userData=user;
        this.totalData=user.length;
        this.pageNoArray();
        this.sevenDataPerPage(0,7);
      });
  }

  pageNoArray(){
    for (let index = 1; index <= Math.ceil(this.totalData/7); index++) {
      this.pages.push(index);
    }
  }
 
  
 

sevenDataPerPage(start:number,end:number){
 
  this.sevenUserData=this.userData.slice(start,end);
  //console.log(this.sevenUserData);


  
}
goToPage(pageNo:number){
  //const box=document.getElementById("currspan"+index);
  //console.log(box?.id);
  //this.sevenUserData=[];
  this.currentPage=pageNo;
  this.sevenDataPerPage((pageNo-1)*7,pageNo*7);
}

goToPrevious(){
  if(this.currentPage>1){
    this.sevenDataPerPage((this.currentPage-2)*7,(this.currentPage-1)*7);
    this.currentPage--;
  }
}
goToNext(){
  let lastpageno=this.pages[this.pages.length-1];
  if(this.currentPage<lastpageno){
    this.sevenDataPerPage((this.currentPage)*7,(this.currentPage+1)*7);
    this.currentPage++;
  }
}



  deleteData(id:any){
    this.apiservice.deleteUser(id).subscribe({
      next: x => {console.log("user deleted",x);
                  alert("user deleted");
                  window.location.reload();
                  },  
      error: err => console.error('An error occurred :', err),  
      complete: () => console.log('There are no more action happen.')  
  });
  }


  updateData(user: any){
    this.apiservice.saveData(user);
    this.router.navigate(['/form']);
  }

 

//for sorting the column either increament or decrement oreder
  reverse : boolean = false;

  sort(key:keyof user)
  {
    console.log(key);
    if(this.reverse)
    {
      this.userData.sort((a,b) => (a[key] < b[key]? -1 : 1));
    }
    else
    {
      this.userData.sort((a,b) => (b[key] < a[key]? -1 : 1));
    }
    this.reverse=!this.reverse;
    this.sevenDataPerPage((this.currentPage-1)*7,this.currentPage*7);
  }

}
