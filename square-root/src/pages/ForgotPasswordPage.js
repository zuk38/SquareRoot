import React, { Component } from "react";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { ForgotPassVerification } from "../components/login/ForgotPassVerification";

export default class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmActive: false,
    };
  }

  changeState = () => {
    this.setState((prev) => ({ isConfirmActive: !prev.isConfirmActive }));
    console.log(this.state);
  }

  render() {
    const { isConfirmActive } = this.state;
    return (
      <>
        <a href="/" class="btn-back" style={{ background: "transparent", top: "0" }}>
          <i class="fas fa-chevron-left" />
          HOME
        </a>
        <div className="forgot">
          <div className="container">
            {!isConfirmActive ? (
              <ForgotPassword
                {...this.props}
                containerRef={(ref) => (this.current = ref)}
                setVerification={this.changeState}
              />
            ) : (
              <ForgotPassVerification
                {...this.props}
                containerRef={(ref) => (this.current = ref)}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
