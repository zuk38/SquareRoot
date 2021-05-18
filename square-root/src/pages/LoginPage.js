import React, { Component } from "react";
import { Login } from "../components/login/Login";
import { Register } from "../components/login/Register";

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLoginActive } = this.state;
    if (isLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prev) => ({ isLoginActive: !prev.isLoginActive }));
    console.log(this.state)
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    return (
      <>
        <a href="/" class="btn-back" style={{background: "transparent"}}>
          <i class="fas fa-chevron-left" />
          HOME
        </a>
        <div className="login">
          <div className="container">
            {isLoginActive ? (
              <Login
                {...this.props}
                containerRef={(ref) => (this.current = ref)}
              />
            ) : (
              <Register
                {...this.props}
                containerRef={(ref) => (this.current = ref)}
              />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </>
    );
  }
}
