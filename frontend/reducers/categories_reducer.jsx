import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import {RECEIVE_PROJECTS} from '../actions/project_actions';
import {merge} from 'lodash';

const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            nextState[action.category.id] = action.category;
            return nextState[action.category.id]
        case RECEIVE_PROJECTS:
            return nextState[action.projects.id]
        default:
            return state;
    }
}
export default CategoriesReducer;