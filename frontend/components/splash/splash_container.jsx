import {connect} from 'react-redux';
import SplashForm from './splash_form';
import {fetchProjects} from '../../actions/project_actions';

const mapStateToProps = (state) => ({
    projects: Object.values(state.entities.projects)
})


const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})



export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
