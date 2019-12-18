import React from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';

const ExerciseNew = ({form, onChange, onSubmit}) => (

    <div className="container">
        <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-sm">
                <Card {...form}/>
            </div>
            <div className="col-sm">
                <ExerciseForm 
                    onChange = {onChange}
                    onSubmit = {onSubmit}
                    form = {form}
                />
            </div>
        </div>
    </div>
)

export default ExerciseNew