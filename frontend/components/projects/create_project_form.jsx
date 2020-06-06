import React from 'react';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category_id: null,
            creator_name: "",
            creator_id: null,
            location: "",
            funding_goal: 0,
            close_date: null,
            photo: null,
            clickedDropdown: false,
            categoryName: "Select your category",
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const project = Object.assign({}, this.state)
        this.props.createProject(project)
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
            this.setState({categoryName : e.target.value})
        }
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
                    <div className={this.state.clickedDropdown ? 'cat-button-clicked' : 'cat-button-unclicked'} onClick={this.handleCategoryDropdown}>{this.state.categoryName}</div>
                    <ul type='hidden' className={this.state.clickedDropdown ? 'cat-dropdown' : 'cat-dropdown-hide'}></ul>
                        <li value="Art" onClick={this.handleCatClick}>Art</li>
                        <li value="Sports" onClick={this.handleCatClick}>Sports</li>
                        {/* <li>Sports</li> */}
                </form>


            </div>
        )
    }


}

export default CreateProjectForm;