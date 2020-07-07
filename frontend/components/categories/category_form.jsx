import { Link } from 'react-router-dom';
import React from 'react';
import category_container from './category_container';
import CategoryFormIndexItem from './category_navbar_container';


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
            .then(this.props.fetchCategories)
        this.props.fetchProjects();
        // this.props.fetchCategories();
    }
    
    // UNSAFE_componentWillMount() {

    // }
    


    render() {
        const { category, projects } = this.props;
        let projs;
        let cat = Number(this.props.match.params.id)

        if (Object.values(projects).length > 0) {
            projs = Object.values(this.props.projects).filter((project) => {
                return project.category_id === cat
            })
        } else {
            projs = [];
        }

        
        return (
            <div className='entire-form'>
                <div className='projs'>
            
                    <h1 className='cat-rec-proj'>RECENT PROJECTS</h1>
                    {/* {category.map((project, idx) => (
                        <span key={idx}>
                            <Link to={`/projects/${project.id}`}><img className='cat-photo' src={project.photo_url}  /></Link>
                            <p className='cat-title' >{project.title}</p>
                            <p className='cat-description'>{project.description}</p>
                            <p className='cat-funding'>Funding Goal: {project.funding_goal}</p>
                            <p className='cat-location'>📌{project.location}</p>
                        </span>
                    )
                    )} */}
                    {projs.map((project, idx) => (
                        <span key={idx}>
                            <Link to={`/projects/${project.id}`}><img className='cat-photo' src={project.photo_url} /></Link>
                        </span>
                    ))}
                    <div></div>
                    
                </div>
            </div>
        )
    }


}

export default CategoryForm;