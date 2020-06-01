import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { discardPeriodicTasks } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  updateemp(value: any) {
    return this.http.put('http://localhost:3000/employees/' + value.id, value);
  }
  getbyid(userid: any) {
    return this.http.get('http://localhost:3000/employees/' + userid);
  }
  AddEmployee(value: any) {
    return this.http.post('http://localhost:3000/employees', value);
  }
  getall(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/employees');
  }

  constructor(private http: HttpClient) {}
}

// const id = +this.route.snapshot.paramMap.get('id');
// this.empService.getEmployee(id)
//   .subscribe(data => this.emp = data);

// check ss folder for the task;
