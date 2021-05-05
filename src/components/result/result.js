import React from 'react'

const Result = (props) => {

        if(props.result===''){
        return(<div></div>)
    }else{
    return(
        <div className="mt-3">
        <label>Cуточная норма калорий</label>
        <span className="ml-2 font-weight-bold">{props.result} </span>
        <div className="mt-1">
        <label>Для похудения в медленном режиме уменьшите норму потребления до</label>
        <span className="ml-2 font-weight-bold">{props.result-250} ккал</span>
        </div>
        <div className="mt-1">
        <label>Для похудения в быстром режиме уменьшите норму потребления до</label>
        <span className="ml-2 font-weight-bold">{props.result-500} ккал</span>
        </div>
        <div className="mt-1">
        <label>Индекс массы тела составляет</label>
        <span className="ml-2 font-weight-bold">{props.index} </span>
        </div>
        <label>{props.msg}</label>
        </div>
        
    )
    }
}

export default Result