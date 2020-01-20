import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Category from './Category';

class CategorySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }

    //Start API
    componentDidMount() {
        let initialCategories = [];
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => {
                return response.json();
            }).then(data => {
                initialCategories = data.categories.map((category) => {
                    return category
                });

                this.setState({
                    categories: initialCategories,
                });
                
                //console.log(initialCategories);
            });
    }

    render() {
        return (
            <Category state={this.state} />
        );
    }
}

export default CategorySearch;