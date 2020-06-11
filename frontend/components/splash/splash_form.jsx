import React from 'react';
import {Link} from 'react-router-dom';
import FirstProjectIndexItem from './first_project_index_item';
import ThreeIndexItems from './three_index_items';
import RestProjectIndexItem from './rest-project-index-item';

class SplashForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        
    }

    componentDidMount() {
        this.props.fetchProjects()
        // debugger
    }

    plusOne(page) {
        if (this.state.page < 1) {
            return e => {
                this.setState({page: 2})
            }
        
        } else if (this.state.page >= 3) {
            return e => {
                this.setState({ page: 3 })
            }
        } 
        else {
            return e => {
                this.setState({ page: page + 1 })
            }
        }

    }

    minusOne(page) {
        if (this.state.page > 3) {
            return e => {
                this.setState({ page: 2 })
            }
        } else {
            return e => {
                this.setState({ page: page - 1 })
            }
        }
    }

    reversing() {
        const {projects} = this.props;
        let first_four = arr.slice(4,8)
        // let second_four = arr.reverse().slice(8,12)
        // let third_four = arr.reverse().slice(12,16)
        // let restArr = projects.reverse();

    }
    


    render() {
        const {projects} = this.props;
        // const arr = projects.reverse()
        const arr = projects.slice()
        let first_four = arr.slice(4,8)
        let second_four = arr.reverse().slice(8,12)
        let third_four = arr.reverse().slice(12,16)
        // let restArr = projects.reverse();

        
        return (
            <div className='spacing'>
                <div className='home-body'>
                    <div className='recent-project'>
                    <p className='break'></p>
                    <h2 className='most-recent-caption'>MOST RECENT PROJECT</h2>
                        {projects.reverse().slice(0,1).map((project) => (
                            <FirstProjectIndexItem project={project} key={project.id}/>
                            ))}
                    </div>
                    <div className='side3'>
                        <h2 className='recommended-projs'>RECOMMENDED PROJECTS</h2>
                        {projects.slice(1,4).map((project) => (
                            <ThreeIndexItems  project={project} key={project.id}/>
                            ))}
                    </div>
                            <p className='bottom-line'></p>
                            <p className='spacing-below'></p>
                    
                </div>
                <div className='subscribe'>
                    <h1 className='subscribe-header'>Discover the best and brightest projects on Catapult</h1>
                    <h2 className='subscribe-sub'>Sign up to receive our weekly Projects We Love newsletter</h2>
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div className='slide-projects'>
                    <button className='backwards-arrow' onClick={this.minusOne(this.state.page)}> ￩ </button>
                    <button className='forward-arrow' onClick={this.plusOne(this.state.page)}> ￫ </button>
                    <h3 className='fresh-favorites'>Fresh Favorites</h3>
                    <div className='sliding-pics'>
                        <ul className={this.state.page <= 1 ? 'first-four' : 'first-four-hide'}>
                       <li> {first_four.map((project) => (
                            <RestProjectIndexItem project={project} key={project.id} />
                            ))}
                        </li>
                        </ul>
                        <ul className={this.state.page === 2 ? 'second-four' : 'second-four-hide'}>
                       <li> {second_four.map((project) => (
                            <RestProjectIndexItem project={project} key={project.id} />
                            ))}
                        </li> 
                        </ul>
                        <ul className={this.state.page >= 3 ? 'third-four' : 'third-four-hide'}>
                       <li> {third_four.map((project) => (
                            <RestProjectIndexItem project={project} key={project.id} />
                            ))}
                        </li>
                        </ul>
                    </div>
                </div>

            </div>
            
        )
    }

}

export default SplashForm;