import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

class Product extends Component {

    constructor (props) {
        super(props);
        this.state = {
            product: {},
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data.product });
    }    

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{ product.body }</p>
                <p>URL: <a href="#">{product.title}</a></p>
            </div>
        );
    }
};

export default Product;