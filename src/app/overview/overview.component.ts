import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  employeesData = [];
  search;
  constructor(private employeeService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit() {
    this.employeesData = this.employeeService.getEmployees();
  }

  addEmployee() {
    this.router.navigate(['add-user']);
  }

  editEmployee(index) {
    this.router.navigate(['edit-user/' + index]);
  }

  deleteEmployee(index) {
    const con = confirm("Do You Want To Delete?");
    if (con)
    {
      this.employeeService.deleteEmployee(index);
    }
  }
}
