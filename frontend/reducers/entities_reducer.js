import {combineReducers} from 'redux';
import users from './users_reducer';
import projects from './projects_reducer';
import categories from './categories_reducer';

const EntitiesReducer = combineReducers({
    users,
    projects,
    categories
})

export default EntitiesReducer;