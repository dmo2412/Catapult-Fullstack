import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
        <footer className='footer'>
            <section className='footer-items'>
                    <a href="https://github.com/dmo2412/Catapult-Fullstack" className='github-link'>Github</a>
                    <a href="https://www.linkedin.com/in/daniel-morgan-228739a7/" className='linkedin-link'>LinkedIn</a>
                    <a href="https://appacademy.io" className='appacademy-link'>App Academy</a>
                    <a href="https://youtube.com" className='youtube-link'>Youtube</a>
            </section>
        </footer>
        
        )
    }

}
export default Footer;