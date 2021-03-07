import React, { Component } from 'react';
import Validate from "../utility/FormValidation";

class Register extends Component {
    //local state - takes input from the user
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        errors: {
            cognito: null,
            blankField: false,
            passwordsMatch: false
        }
    }

    clearErrorState = () => {
        this.setState( {
            errors: {
                cognito: null,
                blankField: false,
                passwordsMatch: false
            }
        });
    }

    handleSubmit = async event => {    //invoked when reg form is being submitted
        event.preventDefault();

        //form validation
        this.clearErrorState();
        const isError = Validate(event, this.state);

        if (isError) {
            this.setState({
                errors: { ...this.state.errors, ...isError}
            });
        }

        //no errors - proceed with AWS Cognito integration 
    };
}

export default Register;