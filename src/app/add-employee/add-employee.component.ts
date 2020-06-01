import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  userform = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    designation: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private empservice: EmployeeserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  submit() {
    this.empservice.AddEmployee(this.userform.value).subscribe((data) => {
      console.log(this.userform.value);
      alert('New Employee has been added');
      this.router.navigate(['/list']);
    });
  }
}
