import { connect } from 'react-redux';
import React from 'react';
import {fetchProject, updateProject} from '../../actions/project_actions';
import FinishProjectForm from './project_show_form'


const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id)),
    updateProject: project => dispatch(updateProject(project))
})

export default connect(mapStateToProps ,mapDispatchToProps)(FinishProjectForm)