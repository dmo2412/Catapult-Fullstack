import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
        <footer className='footer'>
            <section className='footer-items'>
                <Link to='https://github.com/dmo2412/Catapult-Fullstack' className='github-link'>Github</Link>
                <Link to='https://www.linkedin.com/in/daniel-morgan-228739a7/' className='linkedin-link'>LinkedIn</Link>
                <Link to='https://appacademy.io' className='appacademy-link'>App Academy</Link>
                <Link to='https://youtube.com' className='youtube-link'>youtube</Link>
            </section>
        </footer>
        
        )
    }

}
export default Footer;