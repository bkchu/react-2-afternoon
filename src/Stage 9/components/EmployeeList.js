import React, { Component } from "react";

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {this.props.employees.map(employee => {
            return (
              <li
                onClick={() => this.props.selectEmployee(employee)}
                value={employee.name}
                className="listText"
                key={employee.id}
              >
                {" "}
                {employee.name}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
