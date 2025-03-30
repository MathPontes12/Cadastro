import { useNavigate } from 'react-router-dom'
import './Logo.css'

const Logo = ({ link }) => {

    const navigate = useNavigate();
    const Navegar = () => {
        navigate(`${link}`)
    };


    return (

        <img onClick={Navegar} className="imagem-banner" src="/imagens/banner.jpeg" alt="logo do banner" />

    )
}

export default Logo