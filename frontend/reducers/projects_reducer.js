import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions'

const ProjectsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({} , state);

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return Object.assign({}, {[action.project.id]: action.project});
        case REMOVE_PROJECT:
            delete nextState[action.projectId];
            return nextState;
        default:
            return state;
    }
}

export default ProjectsReducer;