import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            category_id: '',
            categories: [],
            products: []
        }
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderProducts = this.renderProducts.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            // title: e.target.value,
            // body: e.target.value
            [e.target.name]: e.target.value
        });
        //console.log('onChange', this.state.body); 
    }

    // create handleSubmit method right after handleChange method
    handleSubmit(e) {
        // stop broswer's default methos behaviour of reloading on from submit
        e.preventDefault();
        axios
        .post('/api/products', {
            title: this.state.title,
            body: this.state.body,
            category_id: this.state.category_id,
        })
        .then(response => {
            console.log('From handle submit', response);
            
            // ser state
            this.setState({
                products: [response.data, ...this.state.products]
            });

            // then clear the value of inputs
            this.setState({
                title: '',
                body: ''
            })
        })
    }

    // render products
    renderProducts() {
        return this.state.products.map(product => (
            <div key={product.id} className="card mb-2">
                <div className="card-header">
                    <strong>{product.title}</strong> 
                </div>
                <div className="card-body">
                    <p>{product.body}</p>
                    <Link
                        to={`/${product.id}/edit`}
                        className="btn btn-sm btn-success float-right ml-2"
                    >
                        Alterar
                    </Link>
                    <button 
                        onClick={() => this.handleDelete(product.id)}
                        className="btn btn-danger btn-sm float-right"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        ))
    }

    // get all products from backend
    getProducts() {
        axios.get('/api/products').then((
            response // console.log(response.data.products)
        ) => 
            this.setState( {
                products: [...response.data.products]
            })
        ); 
    }

    //lifecycle method
    // UNSAFE_componentWillMount() {
    //     this.getProducts();
    // }

    // render products
    renderCategories() {
        return this.state.categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
        ))
    }

    // get all products from backend
    getCategories() {
        axios.get('/api/categories').then((
            response // console.log(response.data.products)
        ) => 
            this.setState( {
                categories: [...response.data.categories]
            })
        ); 
    }

    //lifecycle method
    UNSAFE_componentWillMount() {
        this.getProducts();
        this.getCategories();
    }
    

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = product => product.id !=+ id;
        const updatedProducts = this.state.products.filter(isNotId);
        this.setState({ products: updatedProducts });

        // make delete request to the backend
        axios.delete(`/api/products/${id}`);
    }

    // handle update
    handleUpdate(id) {
        axios.put(`/api/products/${id}`).then(response => {
            this.getProducts();
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="text-muted">Lista de produtos</h1>
                        {this.renderProducts()}
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Crear Produto</div>

                            <div className="card-body">

                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <select  name="category_id" className="form-control" onChange={this.handleChange} required>
                                            <option  value="">Selecionar categoria</option>
                                            {this.renderCategories()}
                                        </select>
                                        {/* <select name="category_id" className="form-control" onChange={this.handleChange} required>
                                           <option value="">Selecionar categoria</option>
                                            <option value="1">Phones</option>
                                            <option value="2">Notebooks</option>
                                            <option value="3">Desktops</option>
                                            <option value="4">CPUs</option>
                                        </select> */}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="title"
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                            type="text"
                                            className="form-control"
                                            placeholder="Titulo"
                                            required                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="body"
                                            onChange={this.handleChange}
                                            value={this.state.body}
                                            className="form-control"
                                            rows="5"
                                            placeholder="Descrição"
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Criar produto
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;