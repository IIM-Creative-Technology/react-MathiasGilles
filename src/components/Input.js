

import '../scss/components/_inputRadio.scss'

const Input = (props) => {
    return (
        <div className="container-input-radio">
            <input value={props.answer.key} name="input" onChange={props.changeEvent} className="input" type="radio"/>
            <p className="answer">{props.answer.name}</p>
        </div>
    )
}

export default Input