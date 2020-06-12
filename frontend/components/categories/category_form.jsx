// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import category_container from './category_container';
import CategoryFormIndexItem from './category_navbar_container';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     num: 1
        // }
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchCategories();
        this.props.fetchCategory(this.props.match.params.id);
    }

    handleNum(num) {

    }

    // handleProjectCategory(num) {
    //     return e => {
    //         this.setState({category_id: num})
    //     }
    // }

    // handleNum(e) {
    //     return e => {
    //         this.setState({num: e.currentTarget.value})
    //     }
    // }

    render() {
        // let num = 0;
        const {categories, projects} = this.props;
        // let first = categories.slice(0,1)
        // if (num === 2) {
        //     // let first = categories.slice(0,1);
        //     Object.freeze(first)
        // }
        // num += 1;
        // debugger
        let cats = Object.assign([], categories);
        let projs = Object.assign([], projects);
        // debugger
        // debugger
        // let projs = projects.filter(project => {
        //     return project.category_id === categories.id 
        // })
        // debugger
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
    // <div className='category-page'>

    //* </div> */