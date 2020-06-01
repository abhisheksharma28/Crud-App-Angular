import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  userid;
  empdata;

  constructor(
    private activeroute: ActivatedRoute,
    private emps: EmployeeserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeroute.queryParams.subscribe((params) => {
      this.userid = params.id;
      console.log(this.userid);
      this.emps.getbyid(this.userid).subscribe((data) => {
        this.empdata = data;
        console.log(this.empdata);
      });
    });
  }
}
