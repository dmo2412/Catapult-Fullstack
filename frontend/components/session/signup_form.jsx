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
            reEnterPassword: "",
            clickedEmail: false,
            clickedPassword: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === this.state.reEnterEmail && this.state.password === this.state.reEnterPassword && this.state.password.length >= 0) {
            debugger
            this.props.signup({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            console.log(this.props.receiveErrors(['nice try chief']))
            debugger
        } else {
            debugger
            // console.log(this.props.receiveErrors(['Email and passwords must match and password must be at least 6 characters']))
            console.log(this.props.receiveErrors(errors))
        }
    }

    update(field) {
        return e => {
            let input = e.target.value;
            this.setState({[field] : input})
        }
    }

    

    toggleEmailClass() {
        this.setState({clickedEmail: true})
    }

    togglePasswordClass() {
        this.setState({clickedPassword: true})
    }

    handleDemoLogin(e) {
        e.stopPropagation();
        this.props.login({ name: 'Willis', email: 'willis@gmail.com', password: 'password' })
    }

    render() {

        // const errors = !this.props.errors ? null : 
        
        //     <ul classname='signup-errors'>
        //         {this.props.errors.map(error => <li>{errors}</li>)}
        //     </ul>
            // debugger
        
        return (
            <div className='signup-background'>

                <div className='signup-form'>
                    <form onSubmit={this.handleSubmit} className='submit-signup'>
                        {/* <ul className='login-errors'>
                            {this.props.errors.map((error, idx) => {
                                return <li key={idx}>Password must</li>
                            })}
                        </ul> */}
                        {/* {this.props.errors} */}
                        {/* <div>{this.props.errors}</div> */}
                    <div className='redirect-to-login'>
                    <p>Have an account? <Link to='/login' className='login-redirect-button'>Log in</Link></p>
                    </div>
                        <h1 className='signup'>Sign up</h1>
                        
                            <input type="text" value={this.state.name} placeholder='Name'
                            onChange={this.update('name')} className='signup-name'  />
                        
                            <input type="text" value={this.state.email} placeholder="Email"
                            onChange={this.update('email')} onFocus={() => this.toggleEmailClass()} className='signup-email'/>
                            
                            <input type="text" value={this.state.reEnterEmail} placeholder="Re-enter email"
                            onChange={this.update('reEnterEmail')} className={this.state.clickedEmail ? 'reveal' : 'hide'} />
                        
                            <input type="password" value={this.state.password} placeholder="Password"
                            onChange={this.update('password')} onFocus={() => this.togglePasswordClass()} className='signup-password' />
                        
                            <input type="password" value={this.state.reEnterPassword} placeholder="Re-enter password"
                            onChange={this.update('reEnterPassword')} className={this.state.clickedPassword ? 'shown' : 'hidden'} />
                        <input type="checkbox" className="weekly-email" />Send me a weekly mix of handpicked projects,
                        plus occasional Catapult news
                        <p> </p>
                        <input type="checkbox" className="contact" />Contact me about participating in Catapult research
                        <br/>
                        <button onClick={this.signup} onSubmit={this.handleSubmit} className='create-account'>Create Account</button>
                        <div className='signup-footer'>
                            <p className="by-signing-up">By signing up, you agree to our terms of use, privacy policy, and cookie policy</p>
                            <p className='read-more'>Read more</p>
                        </div>
                        <div className='left-line'></div>
                        <div className='right-line'></div>
                        <button className='signup-facebook' onClick={this.handleDemoLogin}>Demo login</button>
                        <div className='facebook-footer'>
                            <p>Get notified when your friends back and launch projetcs. We'll never post anything on Facebook without your permission</p>
                            <p>Read more</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
export default SignupForm;