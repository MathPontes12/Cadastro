import Logo from '../../componentes/Logo'
import './PaginaDoPortal.css'

const PaginaDoPortal = () => {

    
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioAcessado'))
    
    console.log(usuarioLogado)

    return(
        <div className='portal'>
        <Logo link='/portal'/>
        <h1 className='texto-portal'>
            Bem vindo ao portal.com, {usuarioLogado.length > 0 ? usuarioLogado[0].nome : 'visitante'}
        </h1>
        </div>
    )
}

export default PaginaDoPortal