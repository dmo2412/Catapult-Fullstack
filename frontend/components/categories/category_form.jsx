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
        let cats = Object.assign([], categories);
        let projs = Object.assign([], projects);
        return (
            <div className='entire-form'>
            <div className='projs'>
                
                <h1 className='cat-rec-proj'>RECENT PROJECTS</h1>
                {categories.map((project, idx) => (
                    <span>
                        <Link to={`/projects/${project.id}`}><img className='cat-photo' src={project.photo_url} /></Link>
                        <p className='cat-title' >{project.title}</p>
                        <p className='cat-description'>{project.description}</p>
                        <p className='cat-funding'>Funding Goal: {project.funding_goal}</p>
                        <p className='cat-location'>📌{project.location}</p>
                    </span>
                ))}
            </div>
            </div>
            )
        }
        
        
    }
    
    export default CategoryForm;