import React, { Component } from "react";

class EmployeeEditor extends Component {
  constructor() {
    super();
    this.state = {
      employee: null,
      originalEmployee: null,
      notModified: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      employee: { ...props.selected },
      originalEmployee: props.selected,
      notModified: true
    });
  }

  handleChange(prop, value) {
    if (this.state.notModified) {
      this.setState({ notModified: false });
    }
    let employeeCopy = { ...this.state.employee };
    employeeCopy[prop] = value;
    this.setState({ employee: employeeCopy });
  }

  save() {
    this.state.originalEmployee.updateName(this.state.employee.name);
    this.state.originalEmployee.updatePhone(this.state.employee.phone);
    this.state.originalEmployee.updateTitle(this.state.employee.title);
    this.setState({ notModified: true });
    this.props.refreshList();
  }

  cancel() {
    this.setState({
      employee: { ...this.state.originalEmployee },
      notModified: true
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="infoCard">
        {this.state.employee ? (
          <div>
            <span id="employeeID">ID: {this.state.employee.id} </span>
            <p id="employeeTitle">{this.state.originalEmployee.name}</p>
            <button
              disabled={this.state.notModified}
              id="saveBtn"
              className="buttonText confirmationButton"
              onClick={this.save}
            >
              Save
            </button>
            <button
              disabled={this.state.notModified}
              className="buttonText neutralButton"
              onClick={this.cancel}
            >
              Cancel
            </button>
            <br />
            <span className="placeholderText">Name</span>
            <input
              onChange={e => this.handleChange("name", e.target.value)}
              className="materialInput"
              type="text"
              value={this.state.employee.name}
            />
            <span className="placeholderText">Phone Number</span>
            <input
              onChange={e => this.handleChange("phone", e.target.value)}
              className="materialInput"
              type="text"
              value={this.state.employee.phone}
            />
            <span className="placeholderText">Title</span>
            <input
              onChange={e => this.handleChange("title", e.target.value)}
              className="materialInput"
              type="text"
              value={this.state.employee.title}
            />
          </div>
        ) : (
          <div id="noEmployee">No Employee Selected</div>
        )}
      </div>
    );
  }
}

export default EmployeeEditor;
