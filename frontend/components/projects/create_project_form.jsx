import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route, Redirect, NavLink } from 'react-router-dom';


class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            title: "",
            category_id: "",
            creator_id: this.props.currentUser.id,
            location: 'New jersey',
            funding_goal: 0,
            description: "",
            pledged: 0,
            close_date: "",
            photoFile: null,
            photo_url: null,
            num: 1,
            val: 1,
            textStatus: false,
            titleStatus: false

        }
        // debugger 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
        this.handleCatClick = this.handleCatClick.bind(this);
        // this.handleRedirect = this.handleRedirect.bind(this);
        this.handleImage = this.handleImage.bind(this);

    }

    // componentDidMount() {
    //     // this.props.fetchProjects()
    // }

    handleSubmit(e) {
        e.preventDefault();
        // const project = Object.assign({}, this.state)
        // // // debugger
        // this.props.createProject(project)
        // .then((project) => {
        //     this.props.history.push(`/projects/finish/${project.project.id}`)});
            // // formData.append('project[photo_url]' , this.state.photo_url)
        const formData = new FormData();
        // debugger
        formData.append('project[title]' , this.state.title)
        formData.append('project[category_id]' , this.state.category_id)
        formData.append('project[creator_id]' , this.state.creator_id)
        formData.append('project[location]' , this.state.location)
        formData.append('project[funding_goal]' , this.state.funding_goal)
        formData.append('project[description]' , this.state.description)
        formData.append('project[pledged]' , this.state.pledged)
        formData.append('project[close_date]' , this.state.close_date)

        if (this.state.photo_url) {
            formData.append('project[photo]', this.state.photoFile)
            
            // debugger
        }
        // this.props.fetchProjects()
        // debugger
        // const project = formData;
        // debugger
        // $.ajax({
        //     url: '/api/projects/',
        //     method: 'Post',
        //     data: formData,
        //     processData: false,
        //     contentType: false
        // })
        // this.props.createProject(formData)
        // debugger 
        // this.props.history.push(`/projects/${formData.id}`)

        this.props.createProject(formData)
        .then(project => this.props.history.push(`/projects/${project.project.id}`))
    }


    
    // handleRedirect(project) {
    //     const ele = project;
    //     // let person = this.props.currentUser;
    //     console.log('why')
    //     // console.log(this.state)
    //     // console.log(person.projects[-1].id)
    //     // let projId = this.state.id[0];
    //     // this.props.history.push(project => `/projects/${this.props.project.id}`)
    //     // debugger
        
        
    // }


    handleCategoryDropdown(e) {
        e.preventDefault();
        if (clickedDropdown) {
            clickedDropdown = false;
        } else {
            clickedDropdown = true;
        }
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

    handleFundingAndClose(field1, field2) {
        return e => {
            this.setState({[field1]: e.currentTarget.value})
            this.setState({[field2]: e.currentTarget.value})
        }
    }

    plusOne(val) {
        // debugger
        return e => {
            this.setState({ val: val + 1 })
            // debugger
        }
    }

    minusOne(val) {
        return e => {
            this.setState({ val: val - 1 })
        }
    }

    handleTextClick(field) {
        return e => {

            this.setState({ [field]: e.currentTarget.value })
            this.setState({ textStatus: true })
        }
    }

    handleTitleClick(field) {
        return e => {

            this.setState({ [field]: e.currentTarget.value })
            this.setState({ titleStatus: true })
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

    handleImage(e) {
        const pic = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({photoFile: pic, photo_url: fileReader.result})
        };
        if (pic) {
            fileReader.readAsDataURL(pic);
        }
    }

    // handleFile(e) {
    //     this.setState({
    //         photo_url: e.currentTarget.files[0]
    //     })
    // }

    render() {
        const preview = this.state.photo_url ? <img src={this.state.photo_url} /> : null;
        // console.log(this.state)
        let clickedDropdown = false;

        let num = 1;


        return (
            <div className={this.state.val < 3 ? 'create-project' : 'create-location'}>
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
                    <textarea type="textarea" className= 'textarea-enter' placeholder='A short description of your project' onChange={this.handleTitleClick('description')} />
                    <p className='line2'></p>
                    <button type='submit' className={this.state.textStatus && this.state.titleStatus ? 'next-location' : 'next-location-unready'} onClick={this.plusOne(this.state.val)}>Next: Location</button>
                    <button className='back-to-category' onClick={this.minusOne(this.state.val)}>Back to category</button>
                        <p className='sub-text2'>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
                </form>
                <form className={this.state.val === 3 ? 'enter-location' : 'enter-location-hide'}>
                    <h2 className='location-header'> Finally, let's confirm your location.</h2>
                    <h4 className='location-sub'>Tell us where you're based.</h4>
                    <select className='location-dropdown' onChange={this.update('location')} value={this.state.location}>
                        <option>Select your Location</option>
                        <option onClick={this.handleLocationClick} value='United States'>United States</option>
                        <option onClick={this.handleLocationClick} value="Europe">Europe</option>
                        <option onClick={this.handleLocationClick} value="Asia">Asia</option>
                        <option onClick={this.handleLocationClick} value="South America">South America</option>
                        <option onClick={this.handleLocationClick} value="Australia">Australia</option>
                    </select>
                    <ul className='checkboxes'>
                            <li><input type="checkbox" className='first-checkbox' />I Would like to receive notifications</li>
                            <li><input type="checkbox" className='second-checkbox' />I'm enjoying this project</li>
                            <li><input type="checkbox" className='third-checkbox' />Is this almost over</li>
                            <li><input type="checkbox" className='fourth-checkbox' />This website is phenomenal</li>
                    </ul>
                    <p className='line4'></p>
                    <button className='submit-button' type='submit' onClick={this.plusOne(this.state.val)}>Add funding goal and close date</button>
                        <button className='back-to-description' onClick={this.minusOne(this.state.val)}>Back to description</button>
                        <p className='sub-text3'>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
                </form>
                <form className={this.state.val === 4 ? 'enter-funding-goal' : 'enter-funding-goal-hide'} >
                    <h2>Enter your funding goal and close date</h2>
                    <input type="number" className='funding-input' placeholder='Enter your funding goal' onChange={this.update('funding_goal')}/>
                    <input type="date" className='end-date' onChange={this.update('close_date')}/>
                        <button type='submit' className='continue-to-image' onClick={this.plusOne(this.state.val)}>Create Project</button>
                </form>
                <form className={this.state.val === 5 ? 'add-image' : 'add-image-hide'} onSubmit={this.handleSubmit}>
                    <input type="file" className='add-photo' onChange={this.handleImage}/>
                    <img className='pic' onChange={this.handleFile}></img>
                    {preview}
                    <button type='submit'>Create Project</button>
                </form>
                


            </div>
            </div>
        )
    }
    
    
}



export default (CreateProjectForm);
// onClick={this.plusOne(this.state.val)}