import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import {fetchCategories, fetchCategory} from '../../actions/category_actions';
import CategoryForm from './category_form';

const mapStateToProps = (state, ownProps) => {
//     category: 
    // debugger
    return {
    category: state.entities.categories[ownProps.match.params.id],
    categories: Object.values(state.entities.categories),
    }
    // category: state.entities.categories[ownProps.match.params.categoryId]
//     // projects: state.entities.projects
}

const mapDispatchToProps = dispatch => ({
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);