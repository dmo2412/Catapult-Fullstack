import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route, Redirect, NavLink } from 'react-router-dom';

class FinishProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.project;
    }

    componentDidMount() {
       this.props.fetchProject(this.props.match.params.projectId);
    }

    render() {
        if (!this.props.project) {
            return null
        }
        return (
            <ul className='uls'>
            </ul>
        )
    }

}

export default FinishProjectForm;