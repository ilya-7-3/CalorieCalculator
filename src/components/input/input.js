import React from 'react'

const Input = (props) => {
    return(
        <div className="col">
        <label>{props.name}</label>
        <input id={props.id} type="text" className="form-control" maxLength="3" autoComplete="off"/>
        <small className="form-text text-muted">{props.small}</small>
      </div>
    )
}

export default Input