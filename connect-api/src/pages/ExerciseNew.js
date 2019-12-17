import React from 'react';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';


class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            desciption: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e => {
        //Reducido com babel
        this.setState({
            form: {
                ...this.state.form, //Para que não subescriva 
                [e.target.name]: e.target.value
            }
        })
    }

    render () {
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm 
                        onChange = {this.handleChange}
                        form = {this.state.form}
                    />
                </div>
            </div>
            
        )
    }
}

export default ExerciseNew