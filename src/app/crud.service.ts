import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User {
  id: number;
  username: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})


export class CrudService {

 currentUser!: User[];

  userData:any;

  constructor( private http:HttpClient) { }

  public getusers():Observable<any> {

    return this.http.get('users.php');
  };


  //add new user
  public adduser(userData: any)
  {
    return this.http.post('http://localhost/users.php/', userData).subscribe((res:any) => {
    console.log(res);
  });
  }

  //delete user
  public deleteuser(userid:any)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: any) => {});
  }


  singleuserdata:any;
  //get single user
  public getsingleuser(userid:any)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: any) => {
      this.singleuserdata = res[0];
      console.log( this.singleuserdata);
    });
  }

  //update user
  public updateuser(userid:any )
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res:any) => {});
  }

}