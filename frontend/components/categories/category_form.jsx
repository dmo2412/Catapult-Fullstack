// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import category_container from './category_container';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchCategories();
        this.props.fetchCategory(this.props.match.params.id);
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
        const {categories, projects} = this.props;
        // debugger
        // let projs = projects.filter(project => {
        //     return project.category_id === categories.id 
        // })
        // debugger
        return (
            <h1 className='category-title'>{categories.title}</h1>
            )
        }
        
        
    }
    
    export default CategoryForm;
    // <div className='category-page'>

    //* </div> */