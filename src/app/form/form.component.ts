import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  editEmployeeId;
  pageTitle="";
  employeeData = {
    name: "",
    designation: "",
    salary: ""
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeServiceService) {
    this.route.params.subscribe(params => {
      this.editEmployeeId = params.id;
    });
  }

  ngOnInit() {
    if (this.editEmployeeId) {
      this.pageTitle="Edit User";
      this.employeeData = JSON.parse(JSON.stringify(this.employeeService.getEmployee(this.editEmployeeId)));
    } else
    {
      this.pageTitle="Add New User";
    }
  }

  submit() {
    if (this.editEmployeeId){
      this.employeeService.updateEmployee(this.editEmployeeId, this.employeeData)
    } else{
      this.employeeService.addEmployee(this.employeeData);
    }
    
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
