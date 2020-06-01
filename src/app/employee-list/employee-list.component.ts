import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private emps: EmployeeserviceService, private router: Router) {}
  public empdata: [];
  ngOnInit(): void {
    this.emps.getall().subscribe((data) => {
      this.empdata = data;
      console.log(this.empdata);
    });
    this.ngOnInit;
  }
  gotoupdate(id1: any) {
    this.router.navigate(['/update'], { queryParams: { id: id1 } });
  }
  details(id2: any) {
    this.router.navigate(['/details'], { queryParams: { id: id2 } });
  }
}
