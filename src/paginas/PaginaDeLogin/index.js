import { useEffect, useState } from "react"
import Formulario from "../../componentes/Formulario"
import Logo from "../../componentes/Logo"
import './PaginaDeLogin.css'
import Botao from "../../componentes/Botao"
import { useNavigate } from "react-router-dom"

const PaginaDeLogin = () => {

    const [loginDigitado, setLoginDigitado] = useState('')
    const [senhaDigitada, setSenhaDigitada] = useState('')
    const [usuarioAcessado, setUsuarioAcessado] = useState('')

    const navigate = useNavigate()

    // funçao para logar
    const acessarConteudo = (evento) => {
        evento.preventDefault()

        // pega os valores salvos em 'usuarios'
        const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        // apos clicar em entrar, vai checkar se tem algum objeto no array que satisfaça a condiçao, ou seja,
        // que seja igual ao login e senha digitidados
        let acesso = usuariosSalvos.filter((usuario) => usuario.login === loginDigitado && usuario.senha === senhaDigitada)

        //se correta a condiçao (tenha um objeto no array que satisfaça, ou seja, que o tamanho do array nao seja mais 0)
        // vai salvar os valores do array de acesso no set e permitir a navegaçao, se nao, emite o alerta
        if (acesso.length > 0) {
            setUsuarioAcessado(acesso);  
            navigate('/portal');         
        } else {
            alert('Login e/ou senha incorretos!');
        }
    }

    const AoClicar = () => {
        navigate('/cadastro')
    }

    // grava os valores do array do usuario logado em 'usuarioAcessado'
    useEffect(() => {
        localStorage.setItem('usuarioAcessado', JSON.stringify(usuarioAcessado))
    }, [
        usuarioAcessado
    ]);

    
    return (

        <div className="formulario">

            <Logo link='/' />

            <div className="formulario-layout-login">
                <Formulario
                    valorLogin={loginDigitado} setValorLogin={setLoginDigitado} valorSenha={senhaDigitada} setValorSenha={setSenhaDigitada}
                    salvarFormulario={acessarConteudo} textoPrimeiro='Login' textoSegundo='Senha' textobotao='Entrar'
                />
                <h4 className="texto-Ou">OU</h4>
                <Botao AoClicar={AoClicar} textobotao='Cadastre-se' />
            </div>
        </div>

    )
}

export default PaginaDeLogin