import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route, Redirect, NavLink } from 'react-router-dom';

class FinishProjectForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = props.project;
        // debugger
    }

    componentDidMount() {
       this.props.fetchProject(this.props.match.params.projectId);
    }

    render() {
        // debugger
        if (!this.props.project) {
            return null
        }
        return (
            <ul className='uls'>
                {/* <li>{this.props.project.title}</li> */}
            </ul>
        )
    }

}

export default FinishProjectForm;