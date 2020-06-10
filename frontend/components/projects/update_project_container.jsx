import { connect } from 'react-redux';
import UpdateProjectForm from './update_project_form';
import {fetchProject, updateProject} from '../../actions/project_actions';
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId],
    // project_id: state.entities.projects[ownProps.match.params.projectId.id],
    currentUser: state.entities.users[state.session.id],
    pathName: '/projects/:projectId'
})

const mapDispatchToProps = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id)),
    updateProject: project => dispatch(updateProject(project)),
    // fetchUser: 
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm);

// Come back for users name, category, pledged