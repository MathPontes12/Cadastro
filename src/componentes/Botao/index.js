import { Button } from '@mui/material'
import './Botao.css'

const Botao = ({ textobotao, AoClicar }) => {
    return(
        <div className="formulario-botao">
        <Button
            onClick={AoClicar}
            type="submit"
            sx={{
                backgroundColor: 'var(--branco)', width: '100%',
                fontSize: '1rem', color: 'var(--cor-secundaria)', fontWeight: '700'
            }}
        >
            {textobotao}
        </Button>
    </div>
    )
}

export default Botao