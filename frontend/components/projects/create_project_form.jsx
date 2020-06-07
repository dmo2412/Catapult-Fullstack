import React from 'react';
import { Link } from 'react-router-dom';
import {Route, Redirect, NavLink} from 'react-router-dom';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "please fucking work",
            category_id: "",
            creator_name: "Willis",
            creator_id: 3,
            location: 'New jersey',
            funding_goal: 10010,
            description: "noneyo",
            pledged: 0,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
        this.handleCatClick = this.handleCatClick.bind(this);
        // this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
        // this.handleClickedCategory = this.handleClickedCategory.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const project = Object.assign({}, this.state)
        this.props.createProject(project)
        // project.append(this.state)
        // this.props.createProject({
        //     category_id: e.target.value,
        //     creator_id: currentUser.id
        // })
        // const formData = new FormData;
        // formData.append('project[title]', this.state.title)
        // formData.append('project[category_id]', this.state.category_id)
        // formData.append('project[creator_name]', this.state.creator_name)
        // formData.append('project[creator_id]', this.state.creator_id)
        // formData.append('project[location]', this.state.location)
        // formData.append('project[funding_goal]', this.state.funding_goal)
        // formData.append('project[description]', this.state.description)
        // formData.append('project[pledged]', this.state.pledged)
        // this.props.createProject(formData)
    }
    
    
    handleCategoryDropdown(e) {
        e.preventDefault();
        if (clickedDropdown) {
            clickedDropdown = false;
        } else {
            clickedDropdown = true;
        }
    }
    
    handleClickedCategory(e) {
        e.preventDefault();
        // debugger
        // if (clickedCategory) {
        //     // debugger
        //     clickedCategory = false;
        //     // debugger
        // } else {
        //     clickedCategory = true;
        // }
        // this.setState({clickedCategory: false})
    }
    handleCatClick(num) {
        return e => {
            // let input = e.target.value;
            this.setState({category_id : num, creator_id: currentUser.id})
        }
    }

    // handleDescriptionClick(e) {
    //     e.preventDefault();
    //     this.setState({clickedDescription: true})
    // }

    update(field) {
        return e=> {
            this.setState({[field]: e.currentTarget.value })
        }
    }

    render() {
        // const {categoryName} = this.props;
        let clickedDropdown = false;
        // let clickedCategory = true;
        // debugger
        // let clickedDescription = false;

        return (
            <div className='create-project'>
                <form className='select-category' >
                    <h2 className="title1">First let's get you set up.</h2>
                    <p className='subtitle1'>Pick a project category to connect with a specific community. You can always update this later.</p>
                    {/* <div className={this.state.clickedDropdown ? 'cat-button-clicked' : 'cat-button-unclicked'} onClick={this.handleCategoryDropdown}>{this.state.categoryName}</div> */}
                    <select className={this.state.clickedDropdown ? 'cat-dropdown' : 'cat-dropdown-hide'} placeholder="Select your category" 
                    onChange={this.update('category_id')} value={this.state.category_id}
                    >
                        <option>Select your category</option>
                        <option onClick={this.handleCatClick(1)} >Arts</option>
                        <option onClick={this.handleCatClick(2)} >Comics and Illustration</option>
                        <option onClick={this.handleCatClick(3)} >Design and Tech</option>
                        <option onClick={this.handleCatClick(4)}>Film</option>
                        <option onClick={this.handleCatClick(5)}>Food and Craft</option>
                        <option onClick={this.handleCatClick(6)}>Games</option>
                        <option onClick={this.handleCatClick(7)}>Music</option>
                        <option onClick={this.handleCatClick(8)}>Publishing</option>
                    </select>
                    <button type='submit' onClick={this.handleSubmit} onSubmit={this.handleSubmit} >Next: Project idea</button>
                    {/* <Link to='/projects/new/description' onClick={this.handleCatClick} className='next-idea-button'>Next: Project idea</Link> */}
                </form>
                {/* <form className={this.state.clickedDescription ? 'description-page' : 'description-page-hide'}>
                    <textarea className='description-text' placeholder="A short description of your project"></textarea>
                </form> */}


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