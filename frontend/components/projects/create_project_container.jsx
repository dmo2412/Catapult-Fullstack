import { connect } from 'react-redux';
import React from 'react';
import CreateProjectForm from './create_project_form';
import {createProject} from '../../actions/project_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    project: {
        title: "",
        category_id: "",
        creator_name: "",
        creator_id: "",
        location: "",
        funding_goal: "",
        description: "",
        close_date: "",
        categoryName: "Select your category"
    },
    formType: 'Create new project'
})

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);