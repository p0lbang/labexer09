import React from "react";

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
    if(this.state.password === this.state.repeatpassword){
      alert("parehas")
    }else{
      alert("hindi parehas")
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
        this.setState({ password: e.target.value });
        break;
      case "repeatpassword":
        this.setState({ repeatpassword: e.target.value });
        break;
    }
  }

  checkInputs() {}

  render() {
    return (
      <div>

      <form action="" onSubmit={this.formSubmit}>
        <label >Firstname:</label>
        <input
          type="text"
          id="firstname"
          class="input"
          value={this.state.firstname}
          onChange={this.inputHandler}
        />
        <br />
        <label >Lastname:</label>
        <input
          type="text"
          id="lastname"
          class="input"
          value={this.state.lastname}
          onChange={this.inputHandler}
        />
        <br />
        <label >Email:</label>
        <input
          type="email"
          id="email"
          class="input"
          value={this.state.email}
          onChange={this.inputHandler}
        />
        <br />
        <label >Password:</label>
        <input
          type="password"
          id="password"
          class="input"
          value={this.state.password}
          onChange={this.inputHandler}
        />
        <br />
        <label >Confirm Password:</label>
        <input
          type="password"
          id="repeatpassword"
          class="input"
          value={this.state.repeatpassword}
          onChange={this.inputHandler}
        />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <div id="output">
        Firstname: {this.state.firstname}<br/>

        Lastname: {this.state.lastname}<br/>

        Email: {this.state.email}<br/>

        Password: {this.state.password}<br/>

        Repeat Password: {this.state.repeatpassword}
      </div>
      </div>

    );
  }
}

export default Form;
