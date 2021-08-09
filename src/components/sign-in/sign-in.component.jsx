import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component{
    constructor(Props){
        super(Props);
        this.state = {
            email: '',
            password : ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value });
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className='sign-in' >
                <h2>I already have and account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        label="Email" 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required />
                    <FormInput 
                        label="Password" 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required />

                    <div className='buttons'>
                        <CustomButton type="submit" >sign in</CustomButton>
                        <CustomButton type="button" onClick = {googleSignInStart} isGoogleSignIn >sign in with google
                        </CustomButton> 
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);