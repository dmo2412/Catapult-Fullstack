import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const FirstProjectIndexItem = ({project, user}) => {

    // const handleName = () => {
    //     let creator = project.creator_id
    //     return creator
    // }
    let creator = project.creator_id
    return (
        <ul className='first-proj-container'>
            <Link to={`/projects/${project.id}`}><img className='splash-image1' src={project.photo_url}/></Link>
            <br/>
            <Link className='title-first' to={`/projects/${project.id}`}>{project.title}</Link>
            <br/>
            <p className='des1'>{project.description}</p>
            <br/>
            <p className='location1'>📌{project.location}</p>
            {/* <p>{user.creator_id}</p> */}
            {/* <Link to={`/projects/${project.id}`}>{project.photo_url}</Link> */}
        </ul>
    )
}

export default FirstProjectIndexItem;