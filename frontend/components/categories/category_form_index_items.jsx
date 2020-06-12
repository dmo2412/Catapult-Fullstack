import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const CategoryFormIndexItem = ({project}) => {
    return (
        <ul>
            <Link to={`/projects/${project.id}`}><img className='cat-photos' src={project.photo_url}/></Link>
        </ul>
    )
}

export default CategoryFormIndexItem;