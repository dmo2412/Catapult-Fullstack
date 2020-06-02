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
        this.props.login(this.state);
    }

    update(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    
    render() {
        return (
            <div className='login-form'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='log-title'>Log in</h1>
                    <label>
                        <input type="text" value={this.state.email} placeholder='Email'
                        onChange={this.update('email')} className='enter-email'/>
                    </label>
                    <label>
                        <input type="password" value={this.state.password} placeholder='Password'
                        onChange={this.update('password')} className='enter-password'/>
                    </label>
                    <button className='login-button' onClick={this.handleSubmit} >Log in</button>
                </form>
                <div className='redirect-to-signup'>
                    <Link to='/signup'>New to Kickstarter? Sign up</Link>
                </div>

            </div>
        )
    }
}

export default LoginForm;