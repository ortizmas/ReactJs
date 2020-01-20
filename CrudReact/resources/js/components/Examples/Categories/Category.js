import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let categories = this.props.state.categories;
        let optionItems = categories.map((category) => 
            <option key={category.id} value={category.id}>{category.name}</option>
        );

        return (
            <div>
                <form>
                    <div className="form-group">
                        <select className="form-control" required>
                            <option value="">Selecionar item</option>
                            {optionItems}
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-md float-right">Enviar</button>    
                    </div>
                </form>
            </div>
        )
    }
}

export default Category;