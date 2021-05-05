import React,{Component} from 'react'
import Header from '../header/header'
import Input from '../input/input'
import Select from '../select/select'
import Result from '../result/result'
import calc from '../calc/calc'
import './form.css'


export default class Form extends Component{

    state={
        result:'',
        index:'',
        msg:''
    }
    
    onClick=(e)=>{
        e.preventDefault()
        const height = document.getElementById('0').value,
        weight=document.getElementById('1').value,
        age=document.getElementById('2').value,
        sex=document.getElementById('3').value,
        activity=document.getElementById('4').value;
        if(Number(height>99 && height<231) 
        && Number(weight>29 && weight<251) 
        && Number(age>4 && age<121)){

            const arrayResult=calc(height,weight,age,sex,activity),
            result=arrayResult[0],
            index=arrayResult[1],
            msg=arrayResult[2]
            
            this.setState({
                result,
                index,
                msg
            })
            
        }else{
            this.setState({
                result:''
            })
        }
    }
    

    render(){
    return(
        <form className="form border rounded">
        <Header/>
        <div className="row">
        <Input id="0" name="Рост" small="Введите рост (в см)"/>
        <Input id="1" name="Вес" small="Введите вес (в кг)"/>
        <Input id="2" name="Возраст" small="Введите возраст (в годах)"/>
        </div>
        <Select/>
        <div className="text-center">
        <button onClick={this.onClick} className="btn btn-primary mt-3 font-weight-bold">РАССЧИТАТЬ</button>
        </div>
        <Result result={this.state.result} index={this.state.index} msg={this.state.msg}/>
        </form>
        
    )
}
}
