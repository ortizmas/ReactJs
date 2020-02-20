import React from 'react'

const HelloWorld = (props) => (
    <div>
        <h1>Hello {props.name}</h1>
    </div>
);

class Props extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nome: "Mateus",
            numero: 0
        }
        this.addCont = this.addCont.bind(this);
    }

    addCont() {
        const count = this.state.numero;
        this.setState({
            numero: count + 1
        })
        console.log(this.state.numero);
        
    }

    render(){
        return(
            <div>
                <HelloWorld name="Eber mais"/>
                <HelloWorld name="Ildor mais" />
                <HelloWorld name="Karolyni Irineu" />
                <HelloWorld name={this.state.nome} />
                <span>{this.state.numero * 2}</span>
                <button className="btn btn-primary" onClick={this.addCont}>+</button>
            </div>
            
        )
    }
}

export default Props;