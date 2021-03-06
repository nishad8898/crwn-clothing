import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password didn't match");
            return;
        }

        signUpStart({ displayName, email, password });
    }

    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render(){

        const { displayName, email, password, confirmPassword } = this.state;

        return(
            <div className='sign-up' >
                <h2 className='title' >I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    onChange= {this.handleChange}
                    required />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange= {this.handleChange}
                    required />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange= {this.handleChange}
                    required />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confrom Password'
                    onChange= {this.handleChange}
                    required />
                <CustomButton type='submit' >sign up</CustomButton>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);