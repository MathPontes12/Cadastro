import { TextField } from "@mui/material"
import './CampoDeTexto.css'

const CampoDeTexto = ({ valor, setValor, type, textoTitulo }) => {
    return (
        <div className="campos">
            <h2>{textoTitulo}</h2>
            <TextField
                sx={{ backgroundColor: 'var(--branco)', borderRadius: '10px', border: '3px, solid, var(--cor-secundaria)', width: '15rem'}}
                type={type}
                required value={valor}
                onChange={(evento) => setValor(evento.target.value)}
            />

        </div>

    )
}

export default CampoDeTexto