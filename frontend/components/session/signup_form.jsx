import React from 'react';

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
            let input = e.currentTarget.value;
            this.setState({[field] : input})
        }
    }

    render() {

        return (
            <div className='signup-form'>
                <form onSubmit={this.handleSubmit} className='submit-signup'>
                    <h1>Sign up</h1>
                    <label>Name
                        <input type="text" value={this.state.name} placeholder='Name'
                        onChange={this.update('name')} />
                    </label>
                    <label>Email 
                        <input type="text" value={this.state.email} placeholder="Email"
                        onChange={this.update('email')} />
                    </label>
                    <label>Re-enter Email 
                        <input type="text" value={this.state.reEnterEmail} placeholder="Email"
                        onChange={this.update('email')} className='reenter-email' />
                    </label>
                    <label>Password 
                        <input type="password" value={this.state.password} placeholder="Password"
                        onChange={this.update('password')} />
                    </label>
                    <label>Re-enter Password 
                        <input type="password" value={this.state.reEnterPassword} placeholder="Re-enter email"
                        onChange={this.update('reEnterPassword')} className="reenter-password" />
                    </label>
                    <button onClick={this.handleSubmit}>Create Account</button>
                    


                </form>
            </div>
        )
    }

}
export default SignupForm;