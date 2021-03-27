import React, { Component } from "react";
import contactMe from "../images/login 1.png";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};
export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phoneNumber: null,
      message: null,
      formErrors: {
        name: "",
        email: "",
        phoneNumber: "",
      },
    };
  }
  handleSubmit = (e) => {
    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              Name: ${this.state.name}         
              Email: ${this.state.email}
              Phone Number: ${this.state.phoneNumber}
            `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phoneNumber":
        formErrors.phoneNumber = value.length < 10 ? "Invalid Number" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="base-container">
        <span className="header">Contact Me</span>
        <div className="content">
          <div className="image-c">
            <img className="image" alt="login logo" src={contactMe}></img>
          </div>
          <p className="para">
            Please fill out the form and describe your project needs i'll get
            back to you as soon as possible.
          </p>
          <div className="form" onSubmit={this.handleSubmit}>
            <div className="form1">
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name.. "
                  autofocus
                  onChange={this.handleChange}
                ></input>
                {formErrors.name.length > 0 && (
                  <span className="errorMessage">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={this.handleChange}
                ></input>
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  name="phoneNumber"
                  placeholder="Phone Number.."
                  onChange={this.handleChange}
                ></input>
                {formErrors.phoneNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.phoneNumber}</span>
                )}
              </div>
            </div>
            <span className="vl"></span>
            <div className="form2">
              <div className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea
                  rows="20"
                  cols="20"
                  className="msg-input"
                  type="text"
                  name="message"
                  placeholder="Type your message here.."
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
