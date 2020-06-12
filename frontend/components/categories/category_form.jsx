import {Link} from 'react-router-dom';
import React from 'react';
import category_container from './category_container';
import CategoryFormIndexItem from './category_navbar_container';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchCategories();
        this.props.fetchCategory(this.props.match.params.id);
    }

    handleNum(num) {

    }


    render() {
        const {categories, projects} = this.props;
        // let cats = Object.assign([], categories);
        // let cats = projects.slice(0,-2)
        let projs = Object.assign([], projects);
        return (
            <div className='entire-form'>
            <div className='projs'>
                
                <h1 className='cat-rec-proj'>RECENT PROJECTS</h1>
                {categories.slice(0,-1).map((cats, idx) => (
                    <span>
                        <Link to={`/projects/${cats.id}`}><img className='cat-photo' src={cats.photo_url} /></Link>
                        <p className='cat-title' >{cats.title}</p>
                        <p className='cat-description'>{cats.description}</p>
                        <p className='cat-funding'>Funding Goal: {cats.funding_goal}</p>
                        <p className='cat-location'>📌{cats.location}</p>
                    </span>
                ))}
            </div>
            </div>
            )
        }
        
        
    }
    
    export default CategoryForm;