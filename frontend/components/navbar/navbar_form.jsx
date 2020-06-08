import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.logout();
    }



    
    render() {
        const {currentUserId} = this.props;
        if (currentUserId === null) {
            return (
                <nav className="navbar">
                    <section className='nav-items'>
                        {/* <section className="left-nav"> */}
                        <Link to="/categories" className='nav-explore'>Explore</Link>
                        <Link to="/projects/new/" className='nav-projects'>Start a project</Link>
                        {/* </section> */}
                        {/* <section className='middle-nav'> */}
                        <Link to="/" className='nav-home'>CATAPULT</Link>
                        {/* </section> */}
                        {/* <section className='right-nav'> */}
                        <Link to="/login" className='nav-login'>Log in</Link>
                        {/* </section> */}
                    </section>
                </nav>

            )
        } else {
            return (
            <nav className="navbar">
                <section className='nav-items'>
                    {/* <section className="left-nav"> */}
                        <Link to="/categories" className='nav-explore'>Explore</Link>
                        <Link to="/projects/new" className='nav-projects'>Start a project</Link>
                    {/* </section> */}
                    {/* <section className='middle-nav'> */}
                        <Link to="/" className='nav-home'>CATAPULT</Link>
                    {/* </section> */}
                    {/* <section className='right-nav'> */}
                        {/* <Link to="/" className='search'>Search</Link> */}
                        <Link to="/login" onClick={this.handleSubmit} className='nav-login'>Log out</Link>
                    {/* </section> */}
                </section>
            </nav>
        )
        }
    }

}

export default Navbar;