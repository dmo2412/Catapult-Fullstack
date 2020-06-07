import * as ProjectAPIUtil from '../util/project_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
})

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

export const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId 
})

export const receiveProjectErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const fetchProjects = () => dispatch => {
    return ProjectAPIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects))),
    err => dispatch(receiveProjectErrors(err.responseJSON))
}

export const fetchProject = id => {
    return ProjectAPIUtil.fetchProject(id)
    .then(project => dispatch(receiveProject(project))),
    err => dispatch(receiveProjectErrors(err.responseJSON))
}

export const createProject = project => dispatch => {
    return ProjectAPIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project))),
    err => dispatch(receiveProjectErrors(err.responseJSON))
}

export const updateProject = project => dispatch => {
    return ProjectAPIUtil.updateProject(project)
    .then(project => dispatch(receiveProject(project))),
    err => dispatch(receiveProjectErrors(err.responseJSON))
}

export const deleteProject = projectId => {
    return ProjectAPIUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId))),
    err => dispatch(receiveProjectErrors(err.responseJSON))
}