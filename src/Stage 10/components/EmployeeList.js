import React, { Component } from "react";

class EmployeeList extends Component {
  render() {
    return (
      <div className="listContainer">
        {this.props.employees.map(employee => {
          return (
            <li
              className="listText"
              key={employee.id}
              onClick={() => this.props.selectEmployee(employee)}
              value={employee.name}
            >
              {employee.name}
            </li>
          );
        })}
      </div>
    );
  }
}

export default EmployeeList;
