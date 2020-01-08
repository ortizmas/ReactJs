import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productInfo: {},
            page: 1
        }

        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);

    };

    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts (page = 1) {
        const response = await api.get(`/products?page=${page}`);

        const { products, ...productInfo } = response.data;

        this.setState({ products: products, productInfo, page });

        //this.setState({products: response.data.products});
        //console.log(response.products);
    };

    async prevPage () {
        
        const {page, productInfo} = this.state;

        if ( page === 1) return ;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    async nextPage() {
        
        const {page, productInfo} = this.state;

        if ( page === productInfo.pages) return ;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    

    render() {
        //return <h1>Hello rocketseat {this.state.products.length}</h1>
        const {products, page, productInfo} = this.state;
        
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong>
                        <p>{product.body}</p>
                        <Link to={`/products/${product.id}`}>Accesar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} className="float-left" onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} className="float-right" onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
};

export default Main;