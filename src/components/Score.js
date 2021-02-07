import '../scss/components/_score.scss'

const Score = (props) => {

    return (
        <div className="container-score">
            Score: {props.mark}/{props.questionLength}
        </div>
    )
}

export default Score