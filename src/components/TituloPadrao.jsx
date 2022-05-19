import './TituloPadrao.modules.css'

function TituloPadrao(props) {
    return(
        <>
            <h1 className='tituloPadrao'>{props.titulo}</h1>
        </>
    )
}

export default TituloPadrao