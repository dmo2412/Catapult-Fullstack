import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexItems from './category_index_items';

class CategoryNav extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.state.props;
        // debugger
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleClick(e) {
        console.log(e.currentTarget.id);
    }

    render() {


        const { categories } = this.props;
        // debugger
        return (
            <nav className='category-nav-names'>
                
                {categories.map((category) => (
                    <CategoryIndexItems category={category} key={category.id} />
                ))}
            </nav>
        )
    }

}

export default CategoryNav;