import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
    render(){
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <div>
                <fieldset className = "form-group">
                    <label>Email:</label>
                    <input {...email} className = "form-control" />
                </fieldset>
                <fieldset className = "form-group">
                    <label>Password:</label>
                    <input {...password} className = "form-control" type="password" />
                </fieldset>
                <fieldset className = "form-group">
                    <label>Confirm Password:</label>
                    <input {...passwordConfirm} className = "form-control" type="password" />
                </fieldset>
                <button className="btn btn-primary">SIgn Up</button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm']
})(SignUp);