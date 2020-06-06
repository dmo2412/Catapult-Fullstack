import {combineReducers} from 'redux';
import users from './users_reducer';
import projects from './projects_reducer';

const EntitiesReducer = combineReducers({
    users,
    projects
})

export default EntitiesReducer;