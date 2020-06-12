README
# CATAPULT
Catapult is a clone of the website Kickstarter. March 16, 2020 App Academy Cohort

# Features
* User Authentication
* Create a new user
* Sign in and sign out, as well as a demo login
* Splash/Home page that shows a list of various projects with the ability to click to navigate different projects
* Create a new project with an image using AWS
    * All one page with CSS used to appear as 4 pages
    * Code changing the values in order to enable class name change for CSS purposes
    <button className='next-project-idea' type='submit' onClick={this.plusOne(this.state.val)} >Next: Project idea</button>
<form className={this.state.val === 2 ? 'enter-description' : 'enter-description-hide'}>
        <h2 className='description-header'>Describe what you'll be creating and enter a title.</h2>
        <h4 className='description-sub'>And don't worry, you can edit this later, too.</h4>
        <input type="textarea" className='textarea-title' placeholder='Enter your title' onChange={this.handleTextClick('title')} />
        <textarea type="textarea" className= 'textarea-enter' placeholder='A short description of your project' onChange={this.handleTitleClick('description')} />
        <p className='line2'></p>
        <button type='submit' className={this.state.textStatus && this.state.titleStatus ? 'next-location' : 'next-location-unready'} onClick={this.plusOne(this.state.val)}>Next: Location</button>
        <button className='back-to-category' onClick={this.minusOne(this.state.val)}>Back to category</button>
</form>
* Category page that will show all different projects of that category

# Technologies Used
* Ruby
* Rails
* jQuery
* Javascript
* React/Redux
* AWS










