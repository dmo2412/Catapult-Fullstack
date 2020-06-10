import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ThreeIndexItems = ({ project }) => {
    return (
        <ul className='right-projects'>
            <Link to={`/projects/${project.id}`}><img className='splash-image2' src={project.photo_url} /></Link>
            <br />
            <Link className='title2' to={`/projects/${project.id}`}>{project.title}</Link>
            <br />
            <p className='location2'>📌{project.location}</p>
            <p className='symbols'>🔖 👍 👎</p>
            <p className='break'></p>
            <p className='bottom-line-side'></p>
            {/* <Link to={`/projects/${project.id}`}>{project.photo_url}</Link> */}
        </ul>
    )
}

export default ThreeIndexItems;