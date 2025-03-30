import './PaginaDeCadastro.css'
import Formulario from '../../componentes/Formulario'
import Logo from "../../componentes/Logo"
import { useEffect, useState } from 'react'
import CampoDeTexto from '../../componentes/CampoDeTexto'
import { useNavigate } from 'react-router-dom'


const PaginaDeCadastro = () => {

    const [valorLogin, setValorLogin] = useState('');
    const [valorSenha, setValorSenha] = useState('');
    const [nomeDoUsuario, setNomeDoUsuario] = useState('');
    const [usuarios, setUsuarios] = useState(() => localStorage.getItem('usuarios') || []);

    const navigate = useNavigate();

    // salva o cadastro
    const salvarFormulario = (evento) => {
        //previne a atualizaçao da pagina pro estado inicial ao clicar em salvar, o que nao deixaria salvar os valores
        evento.preventDefault()

        //ao salvar atribui os valores ao novo usuario
        const novoUsuario = {
            login: valorLogin,
            senha: valorSenha,
            nome: nomeDoUsuario,
        }

        //atualiza o array de usuarios
        setUsuarios([...usuarios, novoUsuario]); // Adiciona ao array

        // Limpa os campos
        setValorLogin("");
        setValorSenha("");
        setNomeDoUsuario("");

        alert('Usuário Cadastrado!! Você será redirecionado para a página de Login')

        // apos salvar e limpar os campos volta pra pagina de login
        navigate('/')
    };

    //salva o array usuarios no navegador. É necessario por o JSON.stringify pois assim em outra pagina, quando for recuperar
    // ele seja convertido corretamente
    useEffect(() => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }, [
        usuarios
    ]);

    return (

        <div className='formulario'>

            <Logo link='/'/>

            <div className='formulario-layout-cadastro'>
                <CampoDeTexto textoTitulo='Nome Completo' valor={nomeDoUsuario} setValor={setNomeDoUsuario}/>
                <Formulario
                    valorLogin={valorLogin} setValorLogin={setValorLogin}
                    valorSenha={valorSenha} setValorSenha={setValorSenha}
                    salvarFormulario={salvarFormulario}
                    textoPrimeiro='Cadastrar Login' textoSegundo='Cadastrar Senha' textobotao='Salvar'
                />
            </div>
        </div>

    )
}

export default PaginaDeCadastro