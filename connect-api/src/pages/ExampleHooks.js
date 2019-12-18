import React, { useState } from 'react';

// useState retorna 2 values: estado atual, funcion que lo va atualizar
const ExampleHooks = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default ExampleHooks