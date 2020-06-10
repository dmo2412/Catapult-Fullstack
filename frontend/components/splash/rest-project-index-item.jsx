import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const RestProjectIndexItem = ({project}) => {
    return (
        <ul>
            <Link to={`/projects/${project.id}`}><img className='splash-image-rest' src={project.photo_url} /></Link>
            <br/>
            <Link className='title-rest' to={`/projects/${project.id}`}>{project.title}</Link>
            <br/>
            <p className='des-rest'>{project.description}</p>
            <p className='location3'>📌{project.location}</p>
        </ul>
    )
}

export default RestProjectIndexItem;