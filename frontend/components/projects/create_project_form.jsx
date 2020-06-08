// import React from 'react';
// import {withRouter} from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import {Route, Redirect, NavLink} from 'react-router-dom';

// class CreateProjectForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             category_id: "",
//             creator_id: this.props.currentUser.id,
//             location: 'New jersey',
//             funding_goal: 10010,
//             description: "",
//             pledged: 0,
//             num: 1,
//             val: 1

//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
//         this.handleCatClick = this.handleCatClick.bind(this);
//         this.handleRedirect = this.handleRedirect.bind(this);
        
//     }
    
//     handleSubmit(e) {
//         e.preventDefault();
//         // this.setState({creator_id: currentUser.id })
//         const project = Object.assign({}, this.state)
//         debugger
//         this.props.createProject(project)
//             // .then((project) => this.props.history.push(`/projects/${project.category_id}`));
        
//     }
//     handleRedirect(project) {
//         // let projId = this.state.id;
//         // debugger
//         // this.props.history.push(`/projects/${project.category_id}`)
//     }
    
    
//     handleCategoryDropdown(e) {
//         e.preventDefault();
//         if (clickedDropdown) {
//             clickedDropdown = false;
//         } else {
//             clickedDropdown = true;
//         }
//     }
    
//     handleClickedCategory(e) {
//         e.preventDefault();
//     }
//     handleCatClick(num) {
//         return e => {
//             this.setState({category_id : num})
//         }
//     }

//     handleLocationClick(val) {
//         return e => {
//             this.setState({location: val})
//         }
//     }

//     plusOne(val) {
//         // debugger
//         return e => {
//             this.setState({val: val + 1})
//             // debugger
//         }
//     }

//     handleTextClick(field) {
//         return e => {
            
//             this.setState({[field]: e.currentTarget.value})
            
//         }
//     }

    

//     update(field) {
//         return e=> {
//             this.setState({[field]: e.currentTarget.value })
//         }
//     }

//     render() {
        
//         let clickedDropdown = false;
        
//         let num = 1;
       

//         return (
//             <div className='create-project'>
//                 <form className={this.state.val === 1 ? 'select-category' : 'select-category-hide'} >
//                     <h2 className="title1">First let's get you set up.</h2>
//                     <p className='subtitle1'>Pick a project category to connect with a specific community. You can always update this later.</p>
//                     <select className={num === 1 ? 'cat-dropdown' : 'cat-dropdown-hide'} placeholder="Select your category" 
//                     onChange={this.update('category_id')} value={this.state.category_id}
//                     >
//                         <option>Select your category</option>
//                         <option onClick={this.handleCatClick} value='1' id='1' >Arts</option>
//                         <option onClick={this.handleCatClick} value='2' id='2' >Comics and Illustration</option>
//                         <option onClick={this.handleCatClick} value='3' id='3' >Design and Tech</option>
//                         <option onClick={this.handleCatClick} value='4' id='4'>Film</option>
//                         <option onClick={this.handleCatClick} value='5' id='5'>Food and Craft</option>
//                         <option onClick={this.handleCatClick} value='6' id='6'>Games</option>
//                         <option onClick={this.handleCatClick} value='7' id='7'>Music</option>
//                         <option onClick={this.handleCatClick} value='8' id='8'>Publishing</option>
//                     </select>
    
//                     <button type='submit' onClick={this.plusOne(this.state.val)} >Next: Project idea</button>
//                 </form>
//                 <form className={this.state.val === 2 ? 'enter-description' : 'enter-description-hide'}>
//                     <h2 className='description-header'>Describe what you'll be creating.</h2>
//                     <h4 className='description-sub'>And don't worry, you can edit this later, too.</h4>
//                     <input type="textarea" className='textarea-enter' placeholder='A short description of your project' onChange={this.handleTextClick('description')}/>
//                     <input type="textarea" className='textarea-title' placeholder='Enter your title' onChange={this.handleTextClick('title')}/>
//                     <button type='submit' onClick={this.plusOne(this.state.val)}>Next: Location</button>
//                 </form>
//                 <form className={this.state.val === 3 ? 'enter-location' : 'enter-location-hide'} onSubmit={this.handleSubmit}>
//                     <h2 className='location-header'> Finally, let's confirm your location</h2>
//                     <h4 className='location-sub'>Tell us where you're based</h4>
//                     <select className='location-dropdown' onChange={this.update('location')} value={this.state.location}>
//                         <option>Select your Location</option>
//                         <option onClick={this.handleLocationClick} value='United States'>United States</option>
//                         <option onClick={this.handleLocationClick} value="Europe">Europe</option>
//                         <option onClick={this.handleLocationClick} value="Asia">Asia</option>
//                         <option onClick={this.handleLocationClick} value="South America">South America</option>
//                         <option onClick={this.handleLocationClick} value="Australia">Australia</option>
//                     </select>
//                     <button className='submit-button' type='submit' onClick={this.plusOne(this.state.val)}>Next</button>
//                 </form>
                    

//             </div>
//         )
//     }
    
    
// }



// export default (CreateProjectForm);
import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route, Redirect, NavLink } from 'react-router-dom';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category_id: "",
            creator_id: 1,
            location: 'New jersey',
            funding_goal: 10010,
            description: "",
            pledged: 0,
            num: 1,
            val: 1,
            textStatus: false,
            titleStatus: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
        this.handleCatClick = this.handleCatClick.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({creator_id: currentUser.id })
        const project = Object.assign({}, this.state)
        debugger
        this.props.createProject(project)
        // .then((project) => this.props.history.push(`/projects/${project.category_id}`));

    }
    handleRedirect(project) {
        // let projId = this.state.id;
        // debugger
        // this.props.history.push(`/projects/${project.category_id}`)
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
    }
    handleCatClick(num) {
        return e => {
            this.setState({ category_id: num })
        }
    }

    handleLocationClick(val) {
        return e => {
            this.setState({ location: val })
        }
    }

    plusOne(val) {
        // debugger
        return e => {
            this.setState({ val: val + 1 })
            // debugger
        }
    }

    handleTextClick(field) {
        return e => {

            this.setState({ [field]: e.currentTarget.value, textStatus: true })
        }
    }
    handleTextArea() {
        this.setState({textStatus: true})
    }
    handleTextTitle() {
        this.setState({titleStatus: true})
    }



    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {

        let clickedDropdown = false;

        let num = 1;


        return (
            <div className='create-project'>
            <div className='create-project-border'>
                <form className={this.state.val === 1 ? 'select-category' : 'select-category-hide'} >
                    <h2 className="title1">First let's get you set up.</h2>
                    <p className='subtitle1'>Pick a project category to connect with a specific community. You can always update this later.</p>
                    <select className={num === 1 ? 'cat-dropdown' : 'cat-dropdown-hide'} placeholder="Select your category"
                        onChange={this.update('category_id')} value={this.state.category_id}
                    >
                        <option>Select your category</option>
                        <option onClick={this.handleCatClick} value='1' id='1' >Arts</option>
                        <option onClick={this.handleCatClick} value='2' id='2' >Comics and Illustration</option>
                        <option onClick={this.handleCatClick} value='3' id='3' >Design and Tech</option>
                        <option onClick={this.handleCatClick} value='4' id='4'>Film</option>
                        <option onClick={this.handleCatClick} value='5' id='5'>Food and Craft</option>
                        <option onClick={this.handleCatClick} value='6' id='6'>Games</option>
                        <option onClick={this.handleCatClick} value='7' id='7'>Music</option>
                        <option onClick={this.handleCatClick} value='8' id='8'>Publishing</option>
                    </select>
                    <p className='line'></p>
                    <button className='next-project-idea' type='submit' onClick={this.plusOne(this.state.val)} >Next: Project idea</button>
                        <p className='sub-text'>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
                </form>
                <form className={this.state.val === 2 ? 'enter-description' : 'enter-description-hide'}>
                    <h2 className='description-header'>Describe what you'll be creating and enter a title.</h2>
                    <h4 className='description-sub'>And don't worry, you can edit this later, too.</h4>
                    <input type="textarea" className='textarea-title' placeholder='Enter your title' onChange={this.handleTextClick('title')} />
                    <textarea type="textarea" className= 'textarea-enter' placeholder='A short description of your project' onChange={this.handleTextClick('description')} />
                    <p className='line2'></p>
                    <button type='submit' className={this.state.textStatus ? 'next-location' : 'next-location-unready'} onClick={this.plusOne(this.state.val)}>Next: Location</button>
                        <p className='sub-text2'>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
                </form>
                <form className={this.state.val === 3 ? 'enter-location' : 'enter-location-hide'} onSubmit={this.handleSubmit}>
                    <h2 className='location-header'> Finally, let's confirm your location</h2>
                    <h4 className='location-sub'>Tell us where you're based</h4>
                    <select className='location-dropdown' onChange={this.update('location')} value={this.state.location}>
                        <option>Select your Location</option>
                        <option onClick={this.handleLocationClick} value='United States'>United States</option>
                        <option onClick={this.handleLocationClick} value="Europe">Europe</option>
                        <option onClick={this.handleLocationClick} value="Asia">Asia</option>
                        <option onClick={this.handleLocationClick} value="South America">South America</option>
                        <option onClick={this.handleLocationClick} value="Australia">Australia</option>
                    </select>
                    <span className='checkboxes'>
                        <input type="checkbox" className='first-checkbox'/>I Would like to receive notifications
                        <input type="checkbox" className='second-checkbox'/>I'm enjoying this project
                        <input type="checkbox" className='third-checkbox'/>Is this almost over
                        <input type="checkbox" className='fourth-checkbox'/>This website is phenomenal
                    </span>
                    <button className='submit-button' type='submit' onClick={this.plusOne(this.state.val)}>Next</button>
                </form>


            </div>
            </div>
        )
    }


}



export default (CreateProjectForm);