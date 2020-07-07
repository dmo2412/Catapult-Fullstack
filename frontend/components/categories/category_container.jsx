import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import {fetchCategories, fetchCategory, fetchProjectsCategory} from '../../actions/category_actions';
import CategoryForm from './category_form';


const projectsCategory = (state, categoryId) => {
    return Object.values(state.entities.projects)
    .filter(project => project.category_id === categoryId)
}

const mapStateToProps = (state, ownProps) => {
    return {
    // projects: state.entities.projects[ownProps.match.params.id],
    // categories: Object.values(state.entities.categories),
    category: state.entities.categories[ownProps.match.params.categoryId],
    // projects: projectsCategory(state, ownProps.match.params.categoryId)
    // projects: projectsCategory(state, ownProps.match.params.categoryId)
        projects: Object.values(state.entities.projects)
    }
   
    
}

const mapDispatchToProps = dispatch => ({
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProjects: () => dispatch(fetchProjects()),
    // fetchProjectsCategory: (category) => dispatch(fetchProjectsCategory(category)),
    // fetchProjectsCategory: (categoryId) => dispatch(fetchProjectsCategory(categoryId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);