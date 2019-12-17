import React from 'react';

class ExerciseNew extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick = () => {
    //     console.log("Clicked")
    // }

    // render() {
    //     return (
    //         <button onClick={this.handleClick}>
    //             Send
    //         </button>
    //     )
    // }

    // Inicializamos state com objeto vacio
    state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        
    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`)
        // let partialState = {}
        // partialState[e.target.name] = e.target.value
        // this.setState(partialState)

        //Reducido com babel
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            className="form-control" 
                            placeholder="Titulo"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descrição"
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="image"
                            className="form-control"
                            placeholder="Imagem"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="leftColor"
                                    className="form-control"
                                    placeholder="Left color"
                                    onChange={this.handleChange}
                                    value={this.state.leftColor}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="rightColor"
                                    className="form-control"
                                    placeholder="Right color"
                                    onChange={this.handleChange}
                                    value={this.state.rightColor}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default ExerciseNew