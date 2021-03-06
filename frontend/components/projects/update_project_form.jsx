import React from 'react';


class UpdateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.project; 
        this.handleTimeLeft = this.handleTimeLeft.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    handleTimeLeft() {
        let today = new Date();
        let endDate = new Date(this.props.project.close_date);

        let days = endDate - today;

        return Math.floor(days/1000/60/60/24)
    }


    render() {
        if (!this.props.project) {
            return null
        }
        return (
            <div className='project-show'>
                <h1 className='show-title'>{this.props.project.title}</h1>
                <h2 className='show-description'>{this.props.project.description}</h2>
                <img className='show-photo' src={this.props.project.photo_url}/>
                <p className='show-location'>📌{this.props.project.location}</p>
                <p className='love-project'>❤️ Project We Love</p>
                <div className='show-container'>
                    <p className='show-line'></p>
                    <p className='show-pledged'>Amount Pledged: ${this.props.project.pledged}</p>
                    <p className='show-funding-goal'>pledged of ${this.props.project.funding_goal} goal</p>
                    <p className='num-backers'>851</p>
                    <p className='backers-text'>backers</p>
                    <button className='show-back-project'>Back this project</button> 
                    <span className='days-left'>All or nothing. This project will only be funded if it reaches its goal by: {this.props.project.close_date}</span>
                </div>
                    

            </div>
            

        )
    }
}

export default UpdateProjectForm;