import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    console.log("paso")
    this.getUsers().subscribe(res => console.log(res));
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http.get("assets/files/customer.json").pipe(
      map((res:any)=>{
        return res.data;
      })
    );
  }
}
