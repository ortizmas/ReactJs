import React from 'react'

const HelloWorld = (props) => (
    <div>
        <h1>Hello {props.name}</h1>
    </div>
);

class Props extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }

    render(){
        return(
            <div>
                <HelloWorld name="Eber mais"/>
                <HelloWorld name="Ildor mais" />
                <HelloWorld name="Karolyni Irineu" />
            </div>
        )
    }
}

export default Props;