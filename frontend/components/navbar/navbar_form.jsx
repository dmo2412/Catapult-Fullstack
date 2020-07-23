import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit() {
        this.props.logout();
    }

    handleClick() {
        this.props.fetchCategories();
    }



    
    render() {
        const {currentUserId} = this.props;
        if (currentUserId === null) {
            return (
                <nav className="navbar">
                    <section className='nav-items'>
                        <Link to="/categories/1" className='nav-explore' onClick={this.handleClick}>Explore</Link>
                        <Link to="/projects/new/" className='nav-projects'>Start a project</Link>
                        <Link to="/" className='nav-home' onClick={this.handleClick}>CATAPULT</Link>
                        <Link to="/login" className='nav-login'>Log in</Link>
                    </section>
                </nav>

            )
        } else {
            return (
            <nav className="navbar">
                <section className='nav-items'>
                        <Link to="/categories" className='nav-explore' onClick={this.handleClick}>Explore</Link>
                        <Link to="/projects/new" className='nav-projects'>Start a project</Link>
                        <Link to="/" className='nav-home' onClick={this.handleClick}>CATAPULT</Link>
                        <Link to="/login" onClick={this.handleSubmit} className='nav-login'>Log out</Link>
                </section>
            </nav>
        )
        }
    }

}

export default Navbar;