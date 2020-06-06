import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const project = Object.assign({}, this.state)
        // this.props.createProject(project)
        this.props.createProject(this.state)
        // this.props.createProject({
        //     category_id: e.target.value,
        //     creator_id: currentUser.id
        // })
    }
    
    
    handleCategoryDropdown(e) {
        e.preventDefault();
        if (this.state.clickedDropdown) {
            this.setState({clickedDropdown: false})
        } else {
            this.setState({clickedDropdown: true})
        }
    }

    handleCatClick(field) {
        return e => {
            // let input = e.target.value;
            this.setState({category_id : e.target.value, creator_id: currentUser.id})
        }
    }

    // handleClick(e) {
    //     e.currentTarget.dataset.id;
    // }

    componentDidMount() {
        this.setState({
            creator_name: logoutCurrentUser.name,
            creator_id: logoutCurrentUser.id
        })
    }

    // redirect() {
    //     let count = 0;
    //     if (count === 0)
    // }

    render() {
        // const {categoryName} = this.props;

        return (
            <div className='create-project'>
                <form className='select-category'>
                    <h2 className="title1">First let's get you set up.</h2>
                    <p className='subtitle1'>Pick a project category to connect with a specific community. You can always update this later.</p>
                    {/* <div className={this.state.clickedDropdown ? 'cat-button-clicked' : 'cat-button-unclicked'} onClick={this.handleCategoryDropdown}>{this.state.categoryName}</div> */}
                    <select className={this.state.clickedDropdown ? 'cat-dropdown' : 'cat-dropdown-hide'} placeholder="Select your category">
                        <option>Select your category</option>
                        <option onClick={this.handleCatClick} value="1">Arts</option>
                        <option onClick={this.handleCatClick} value="2">Comics and Illustration</option>
                        <option onClick={this.handleCatClick} value="3">Design and Tech</option>
                        <option onClick={this.handleCatClick} value="4">Film</option>
                        <option onClick={this.handleCatClick} value="5">Food and Craft</option>
                        <option onClick={this.handleCatClick} value="6">Games</option>
                        <option onClick={this.handleCatClick} value="7">Music</option>
                        <option onClick={this.handleCatClick} value="8">Publishing</option>
                    </select>
                    <button onSubmit={this.handleSubmit}>Next: Project idea</button>
                </form>


            </div>
        )
    }
    
    
}

export default CreateProjectForm;
{/* <ul type='hidden' className={this.state.clickedDropdown ? 'cat-dropdown' : 'cat-dropdown-hide'}>
    <li onClick={this.handleClick} data-id='1'><span>Art</span></li>
    <li onClick={this.handleClick} data-id='2'>Sports</li>
    {/* <li>Sports</li> */}
{/* </ul> */} 