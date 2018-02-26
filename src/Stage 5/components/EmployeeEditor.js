import React, { Component } from "react";

class EmployeeEditor extends Component {
  constructor() {
    super();
    this.state = {
      employee: null,
      originalEmployee: null,
      notModified: true
    };
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props) {
    this.setState({
      employee: { ...props.selected },
      originalEmployee: props.selected,
      notModified: true
    });
  }

  // handleChange
  handleChange(prop, value) {
    if (this.state.notModified) {
      this.setState({ notModified: false });
    }
    let employeeCopy = { ...this.state.employee };
    employeeCopy[prop] = value;
    this.setState({ employee: employeeCopy });
  }

  // save
  save() {
    let { originalEmployee, employee } = this.state;
    originalEmployee.updateName(employee.name);
    originalEmployee.updatePhone(employee.phone);
    originalEmployee.updateTitle(employee.title);

    this.setState({ notModified: true });
    this.props.refreshList();
  }

  // cancel
  cancel() {
    this.setState({
      employee: { ...this.state.originalEmployee },
      notModified: true
    });
  }

  render() {
    return (
      <div className="infoCard">
        {this.state.employee ? (
          <div>
            <span id="employeeID"> ID: {this.state.employee.id} </span>
            <p id="employeeTitle"> {this.state.originalEmployee.name} </p>
            <br />
            <button
              id="saveBtn"
              className="confirmationButton"
              disabled={this.state.notModified}
              onClick={this.save}
            >
              {" "}
              Save{" "}
            </button>
            <button
              className="neutralButton"
              disabled={this.state.notModified}
              onClick={this.cancel}
            >
              {" "}
              Cancel{" "}
            </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input
              className="materialInput"
              value={this.state.employee.name}
              onChange={e => {
                this.handleChange("name", e.target.value);
              }}
            />
            <span className="placeholderText"> Phone Number </span>
            <input
              className="materialInput"
              value={this.state.employee.phone}
              onChange={e => {
                this.handleChange("phone", e.target.value);
              }}
            />
            <span className="placeholderText"> Title </span>
            <input
              className="materialInput"
              value={this.state.employee.title}
              onChange={e => {
                this.handleChange("title", e.target.value);
              }}
            />
          </div>
        ) : (
          <p id="noEmployee"> No Employee Selected </p>
        )}
      </div>
    );
  }
}

export default EmployeeEditor;
