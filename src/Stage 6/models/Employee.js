export default class Employee {
  // constructor
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  // updateName
  updateName(str) {
    this.name = str;
  }

  // updatePhone
  updatePhone(str) {
    this.phone = str;
  }

  // updateTitle
  updateTitle(str) {
    this.title = str;
  }
}
