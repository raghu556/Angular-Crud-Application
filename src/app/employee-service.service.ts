import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeData = [
    { name: "Rajendra", designation: "Ui Developer", salary: "10000" }
  ]
  constructor() { }

  getEmployees() {
    return this.employeeData;
  }

  getEmployee(index) {
    return this.employeeData[index];
  }

  addEmployee(data) {
    this.employeeData.push(data);
  }

  updateEmployee(index, data) {
    this.employeeData[index] = data;
  }

  deleteEmployee(index) {
    this.employeeData.splice(index,1);
    console.log(this.employeeData);
  }

}
