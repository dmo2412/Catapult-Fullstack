import { connect } from 'react-redux';
import CategoryNav from './category_navbar';
import {fetchCategories} from '../../actions/category_actions'

const mapStateToProps = (state) => ({
    categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav);