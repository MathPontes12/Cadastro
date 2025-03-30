import CampoDeTexto from "../CampoDeTexto"
import Botao from "../Botao"



const Formulario = ({ valorLogin, setValorLogin,
    valorSenha, setValorSenha,
    salvarFormulario, textoPrimeiro, textoSegundo, textobotao }) => {


    return (

        <form onSubmit={salvarFormulario}>
            <CampoDeTexto valor={valorLogin} setValor={setValorLogin} textoTitulo={textoPrimeiro} />
            <CampoDeTexto valor={valorSenha} setValor={setValorSenha} type='password' textoTitulo={textoSegundo} />
            <Botao textobotao={textobotao}/>
        </form>

    )
}

export default Formulario