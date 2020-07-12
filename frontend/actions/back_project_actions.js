import * as BackProjectAPIUtil from '../util/backing_api_util';
import * as ReceiveProjectAPIUtil from '../util/project_api_util'
import { receiveProject } from './project_actions';

// export const BACK_PROJECT = 'BACK_PROJECT';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

export const backProject = project => dispatch => {
    return BackProjectAPIUtil.backProject(project)
    .then(project => dispatch(receiveProject(project)))
}