import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItems = ({ category }) => {
    return (
        <ul className='nav-cats'>
            <Link key={category.id} className='category-names-nav' to={`/categories/${category.id}`}>{category.name}</Link>
        </ul>
    )
}

export default CategoryIndexItems;