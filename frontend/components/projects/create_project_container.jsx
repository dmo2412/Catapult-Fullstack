import { connect } from 'react-redux';
import React from 'react';
import CreateProjectForm from './create_project_form';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id],
    pathName: '/projects/new'
        
    // },
    // formType: 'Create new project'
})

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project))
    // fetchProjects: () => dispatch(fetchProjects())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);