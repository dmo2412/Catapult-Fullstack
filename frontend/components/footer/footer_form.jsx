import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
        <footer className='footer'>
            <section className='footer-items'>
                    <a href="https://github.com/dmo2412/Catapult-Fullstack" className='github-link'>Github</a>
                    <a href="https://www.linkedin.com/in/daniel-morgan-228739a7/" className='linkedin-link'>LinkedIn</a>
                    <a href="https://angel.co/u/daniel-morgan-23" className='appacademy-link'>Angel List</a>
                    <a href="https://www.danny-morgan.com" className='youtube-link'>Portfolio</a>
            </section>
        </footer>
        
        )
    }

}
export default Footer;