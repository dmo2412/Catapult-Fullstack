import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import {merge} from 'lodash';

const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            // return merge({}, {[action.category.id]: action.category})
            return action.category.id = action.category;
        default:
            return state;
    }
}
export default CategoriesReducer;