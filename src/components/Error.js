
const Error = (props) => {
    if(props.error){
        return(
            <p>Mauvaise réponse</p>
        )
    }
    else{
        return(
            <></>
        )
    }
}

export default Error