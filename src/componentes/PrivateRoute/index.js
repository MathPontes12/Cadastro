import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // pega o valor de usuarioAcessado
    const usuarioAcessado = JSON.parse(localStorage.getItem('usuarioAcessado'));
    
    // if para verificar se foi feito o login antes de entrar no portal, evitando a entrada alterando somente a url
    if (!usuarioAcessado || usuarioAcessado.length === 0) {
        return <Navigate to="/" />;
    }

    // Se confirmado, permite o acesso ao conteúdo da rota protegida
    return children;
};

export default PrivateRoute;
