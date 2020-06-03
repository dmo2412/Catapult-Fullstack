import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({} , this.state)
        this.props.login(user);
    }

    handleTestLogin(e) {
        this.props.login({name: 'Willis' , email: 'willis@gmail.com' , password: 'password'})
    }

    update(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    
    render() {
        return (
            <div className='login-form'>
                <form onSubmit={this.handleSubmit}>
                    {/* <ul className='login-errors'>
                        {this.props.receiveErrors.map((error, idx) => {
                            return <li key={idx}>{error}</li>
                        })}
                    </ul> */}
                    <h1 className='log-title'>Log in</h1>
                    <label>
                        <input type="text" value={this.state.email} placeholder='Email'
                        onChange={this.update('email')} className='enter-email'/>
                    </label>
                    <label>
                        <input type="password" value={this.state.password} placeholder='Password'
                        onChange={this.update('password')} className='enter-password'/>
                    </label>
                    <button type='submit' className='login-button' onClick={this.login} onSubmit={this.handleSubmit} >Log in</button>
                    <input type="checkbox" className="remember-me" />Remember me
                </form>
                <button className='facebook'>Continue with Facebook</button>
                <div className='redirect-to-signup'>
                    <p>New to Kickstarter? <Link to='/signup' className="sign-up-text-color">Sign up</Link></p>
                </div>
                <div className='login-footer'>
                    <p>The site is protected by reCAPTCHA and the google Privacy Policy and Terms of Service apply</p>
                </div>

            </div>
        )
    }
}

export default LoginForm;