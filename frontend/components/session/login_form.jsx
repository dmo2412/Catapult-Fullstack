import React from 'react';

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

    // update(field) {
    //     return e => this.setState({[field] : e.currentTarget.value})
    // }

    // demoAccount() {
    //     let credentials = {
    //         email: 'user123@gmail.com',
    //         password: 'password123'
    //     }
    // }

    render() {
        return (
            <div className='login-form'>
                <form onSubmit={this.handleSubmit} className='login-form-header'>
                    <h1>Log in</h1>
                    <label>Email
                        <input type="text" value={this.state.email} placeholder='Email'
                        onChange={this.update('email')} className='enter-email'/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} placeholder='Password'
                        onChange={this.update('password')} className='enter-password'/>
                    </label>
                    <button onClick={() => {this.setState({email: 'user123@gmail.com' , password: 'password123'})} } >Log in</button>
                </form>

            </div>
        )
    }
}

export default LoginForm;