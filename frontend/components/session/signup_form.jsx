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
        // this.toggleEmail = this.toggleEmail.bind(this);
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

    

    toggleEmailClass() {
        this.setState({clickedEmail: true})
    }

    togglePasswordClass() {
        this.setState({clickedPassword: true})
    }

    render() {
        
        return (
            <div className='signup-form'>
                <form onSubmit={this.handleSubmit} className='submit-signup'>
                    <ul className='login-errors'>
                        {this.props.errors.map((error, idx) => {
                            return <li key={idx}>{error}</li>
                        })}
                    </ul>
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
                        {/* <p className='email-text'> Send me a weekly mix of handpicked projects, plus occasional Catapult news </p> */}
                    <input type="checkbox" className="contact" />Contact me about participating in Catapult research
                    {/* <p className='contact-text'>Contact me about participating in Catapult research</p> */}
                    <br/>
                    <button onClick={this.signup} onSubmit={this.handleSubmit} className='create-account'>Create Account</button>
                    <div className='signup-footer'>
                        <p className="by-signing-up">By signing up, you agree to our terms of use, privacy policy, and cookie policy</p>
                        <p className='read-more'>Read more</p>
                    </div>
                    <div className='left-line'></div>
                    {/* <div className='text-strike'>or</div> */}
                    <div className='right-line'></div>
                    <button className='signup-facebook'>Continue with Facebook</button>
                    <div className='facebook-footer'>
                        <p>Get notified when your friends back and launch projetcs. We'll never post anything on Facebook without your permission</p>
                        <p>Read more</p>
                    </div>
                </form>
            </div>
        )
    }

}
export default SignupForm;