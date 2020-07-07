import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import {fetchCategories, fetchCategory} from '../../actions/category_actions';
import CategoryForm from './category_form';

const mapStateToProps = (state, ownProps) => {
    return {
    category: state.entities.categories[ownProps.match.params.categoryId],
        projects: Object.values(state.entities.projects)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProjects: () => dispatch(fetchProjects()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);