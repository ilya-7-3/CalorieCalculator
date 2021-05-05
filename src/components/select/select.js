import React from 'react'

const Select = () => {
    return(
        <div className="row">

            <div className="col">
            <label>Пол</label>
            <select id="3" className="form-control form-control">
            <option value="+5">Мужчина</option>
            <option value="-161">Женщина</option>
            </select>
            </div>

            <div className="col">
            <label>Активность</label>
            <select id="4" className="form-control form-control">
            <option value="1.2">Нет физической нагрузки</option>
            <option value="1.375">Спорт 1-3 раза в неделю</option>
            <option value="1.55">Спорт 3-5 раз в неделю</option>
            <option value="1.725">Спорт 6-7 раз в неделю</option>
            <option value="1.9">Спорт ежедневно 2 раза в день</option>
            </select>
            </div>
                
        </div>
    )
}

export default Select