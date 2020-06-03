import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            reEnterEmail: "",
            password: "",
            reEnterPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.email === this.props.reEnterEmail && this.props.password === this.props.reEnterPassword) {
            this.props.signup({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
        }
    }

    update(field) {
        return e => {
            let input = e.target.value;
            this.setState({[field] : input})
        }
    }

    render() {

        return (
            <div className='signup-form'>
                <form onSubmit={this.handleSubmit} className='submit-signup'>
                    <h1>Sign up</h1>
                    <label>
                        <input type="text" value={this.state.name} placeholder='Name'
                        onChange={this.update('name')} />
                    </label>
                    <label>
                        <input type="text" value={this.state.email} placeholder="Email"
                        onChange={this.update('email')} />
                    </label>
                    <label>
                        <input type="text" value={this.state.reEnterEmail} placeholder="re-enter email"
                        onChange={this.update('reEnterEmail')} className='reenter-email' />
                    </label>
                    <label>
                        <input type="password" value={this.state.password} placeholder="Password"
                        onChange={this.update('password')} />
                    </label>
                    <label>
                        <input type="password" value={this.state.reEnterPassword} placeholder="Re-enter password"
                        onChange={this.update('reEnterPassword')} className="reenter-password" />
                    </label>
                    <button onClick={this.signup} onSubmit={this.handleSubmit}>Create Account</button>
                </form>
                <div className='redirect-to-login'>
                   <p>Have an account? <Link to='/login'>Log in</Link></p>
                </div>
            </div>
        )
    }

}
export default SignupForm;