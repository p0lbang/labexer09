import React from "react";

const validatePassword = (input1) => {
  if (input1.length < 8) {
    return false;
  }

  let containsNumber = false;
  let containsUpperCase = false;
  let containsLowerCase = false;

  for (let i = 0; i < input1.length; i++) {
    if (parseInt(input1[i])) {
      containsNumber = true;
    } else if (input1[i] === input1[i].toUpperCase()) {
      containsUpperCase = true;
    } else if (input1[i] === input1[i].toLowerCase()) {
      containsLowerCase = true;
    }
  }

  if (containsNumber && containsUpperCase && containsLowerCase) {
    return true;
  }
  return false;
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatpassword: "",
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    if (!validatePassword(this.state.password)) {
      alert("invalid password")
      return;
    }

    if (this.state.password !== this.state.repeatpassword) {
      alert("passwords does not match");
      return;
    }

    alert("congrats new player");
    let inputs = document.getElementsByClassName("input");
    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      element.value = "";
    }
  }

  inputHandler(e) {
    switch (e.target.id) {
      case "firstname":
        this.setState({ firstname: e.target.value });
        break;
      case "lastname":
        this.setState({ lastname: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        if (e.target.value === "") {
          document.getElementById("repeatpassword").disabled = true;
        } else {
          document.getElementById("repeatpassword").disabled = false;
        }

        this.setState({ password: e.target.value });

        if (!validatePassword(e.target.value)) {
          document.getElementById("errorMSGpass").innerHTML = "Password is invalid!";
        } else {
          document.getElementById("errorMSGpass").innerHTML = "";
        }

        break;
      case "repeatpassword":
        this.setState({ repeatpassword: e.target.value });
        if (this.state.password !== e.target.value) {
          document.getElementById("errorMSGrepeatpass").innerHTML = "Password does not match!";
          return;
        } else {
          document.getElementById("errorMSGrepeatpass").innerHTML = "";
        }
        break;
    }
  }

  checkInputs() { }

  render() {
    return (
      <div>

        <form action="" onSubmit={this.formSubmit}>
          <label className="label" >Firstname:</label>
          <input
            type="text"
            id="firstname"
            className="input"
            value={this.state.firstname}
            onChange={this.inputHandler}
            required={true}
          />
          <br />
          <label className="label">Lastname:</label>
          <input
            type="text"
            id="lastname"
            className="input"
            value={this.state.lastname}
            onChange={this.inputHandler}
            required={true}
          />
          <br />
          <label className="label">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            value={this.state.email}
            onChange={this.inputHandler}
            required={true}
          />
          <br />
          <label className="label">Password:</label>
          <input
            type="password"
            id="password"
            className="input"
            value={this.state.password}
            onChange={this.inputHandler}
            required={true}
          />
          <span id="errorMSGpass" className="errorMessage">

          </span>
          <br />
          <label className="label">Confirm Password:</label>
          <input
            type="password"
            id="repeatpassword"
            className="input"
            value={this.state.repeatpassword}
            onChange={this.inputHandler}
            disabled={true}
            required={true}
          />
          <span id="errorMSGrepeatpass" className="errorMessage">

          </span>
          <br />
          <input id="btnSignUp" type="submit" value="Sign Up" />
        </form>
        <div className="Container">

          <div id="output">
            <span className="label">Firstname:</span> {this.state.firstname}<br />

            <span className="label">Lastname:</span> {this.state.lastname}<br />

            <span className="label">Email:</span> {this.state.email}<br />

            <span className="label">Password:</span> {this.state.password}<br />

            <span className="label">Confirm Password:</span> {this.state.repeatpassword}
          </div>
        </div>
      </div>

    );
  }
}

export default Form;
