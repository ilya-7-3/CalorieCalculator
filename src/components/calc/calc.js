function calc(height,weight,age,sex,activity){
   
    const result =  ((10*weight) + (6.25*height) - (5 *age) + Number(sex))*activity;
    const index=weight/((height/100)*(height/100))
    var msg='';
    
    if(index<16.5){
        msg='У Вас крайний недостаток веса'
    }
    if(index>=16.5 && index<=18.4){
        msg='У Вас недостаток в весе'
    }
    if(index>=18.5 && index<=24.9){
        msg='У Вас нормальный вес тела'
    }
    if(index>=25 && index<=30){
        msg='У Вас избыточная масса тела'
    }
    if(index>=30.1 && index<=34.9){
        msg='У Вас ожирение 1 степени'
    }
    if(index>=35 && index<=40){
        msg='У Вас ожирение 2 степени - тяжелое'
    }
    if(index>=40){
        msg='У Вас ожирение 3 степени - крайне тяжелое'
    }
    
    return [result.toFixed(),index.toFixed(),msg]
}

export default calc