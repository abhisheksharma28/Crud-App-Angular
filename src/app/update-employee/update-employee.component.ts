import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {
  userid;
  empdata;
  userform = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    designation: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private activeroute: ActivatedRoute,
    private emps: EmployeeserviceService,
    private router: Router
  ) {}
  update() {
    this.emps.updateemp(this.empdata).subscribe((data) => {
      alert('Employee is updated');
      this.router.navigate(['/list']);
    });
  }
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
