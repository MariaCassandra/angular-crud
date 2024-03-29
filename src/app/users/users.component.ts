import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  data:any[] = [];
  constructor( private crudservice: CrudService, private router: Router){
    this.loaddata();
  }
//Get all users data
loaddata()
{
  //Get all usera details
  this.crudservice.getusers().subscribe((res: any[])=>{

    this.data = res;
  });
}
//Delete User
deleteuser(id:any)
{
  if(confirm("Are you sure to delete?")) {
  // Initialize Params Object
  var myFormData = new FormData();


  // Begin assigning parameters
  myFormData.append('deleteid', id);

  this.crudservice.deleteuser(myFormData);
  //sweetalert message popup left away because it didn't work at all
  this.loaddata();
}
}
  updateUser(id:any) {

    this.router.navigate([`/updateuser`, `${id}`]);
  }

  ngOnInit(): void {

    this.loaddata();
  }
}