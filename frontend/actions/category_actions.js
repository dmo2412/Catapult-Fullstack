import * as CategoryAPIUtil from '../util/category_api_util';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const RECEIVE_CATEGORY_PROJECTS = 'RECEIVE_CATEGORY_PROJECTS'


export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const receiveCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
})

export const receiveCategoryProjects = projects => ({
    type: RECEIVE_CATEGORY_PROJECTS,
    projects
})

export const fetchCategories = () => dispatch => {
    return CategoryAPIUtil.fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}

export const fetchCategory = id => dispatch => {
    return CategoryAPIUtil.fetchCategory(id)
    .then(category => dispatch(receiveCategory(category)))
}
