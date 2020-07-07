import { Link } from 'react-router-dom';
import React from 'react';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
            .then(this.props.fetchCategories)
        this.props.fetchProjects();
    }
    

    render() {
        const { category, projects } = this.props;
        let projs;
        let cat = Number(this.props.match.params.id)

        if (Object.values(projects).length > 0) {
            projs = Object.values(this.props.projects).filter((project) => {
                return project.category_id === cat;
            })
        } else {
            projs = [];
        }

        
        return (
            <div className='entire-form'>
                <div className='projs'>
            
                    <h1 className='cat-rec-proj'>RECENT PROJECTS</h1>
                    
                    {projs.reverse().map((project, idx) => (
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