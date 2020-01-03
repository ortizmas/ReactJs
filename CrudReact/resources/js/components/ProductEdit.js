import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            product: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
            //name: e.target.value
            [e.target.name]: e.target.value
        });
        // console.log('onChange', this.state.name);
    }
    // create handleSubmit method right after handleChange method
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .put(`/api/products/${this.props.match.params.id}`, {
                title: this.state.title,
                body: this.state.body
            })
            .then(response => {
                console.log('successfully edited the task');
                this.props.history.push('/');
            });
    }
    // get all tasks from backend
    getProducts() {
        axios.get(`/api/products/${this.props.match.params.id}/edit`).then((
            response // console.log(response.data.products)
        ) =>
            this.setState({
                product: response.data.product,
                title: response.data.product.title,
                body: response.data.product.body
            })
        );
    }
    // lifecycle method
    UNSAFE_componentWillMount() {
        this.getProducts();
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Alterar produto</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="title"
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                            type="text"
                                            className="form-control"
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
                                            maxLength="255"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Alterar produto
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

export default ProductEdit;