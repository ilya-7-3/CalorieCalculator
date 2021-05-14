import ReactDOM from 'react-dom'
import React from 'react';
import Form from './components/form/form'

const App = () => {
    return(
    <div className="container">
        <Form/>
    </div>
    )
}

ReactDOM.render(App(),document.getElementById('root'));