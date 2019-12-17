import React from 'react';

class ExerciseForm extends React.Component {

    render () {
        const { onChange, onSubmit, form } = this.props
        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            className="form-control" 
                            placeholder="Titulo"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descrição"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="img"
                            className="form-control"
                            placeholder="Imagem"
                            onChange={onChange}
                            value={form.img}
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
                                    onChange={onChange}
                                    value={form.leftColor}
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
                                    onChange={onChange}
                                    value={form.rightColor}
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

export default ExerciseForm