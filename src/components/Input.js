

import '../scss/components/_inputRadio.scss'

const Input = (props) => {
    return (
        <div className="container-input-radio">
            <input name="input" className="input" type="radio"/>
            <p className="answer">{props.question}</p>
        </div>
    )
}

export default Input