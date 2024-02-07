import { Link } from 'react-router-dom';
import styled from 'styled-components';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

const Opcoes = styled.ul`
display: flex;
`

const Opcao = styled.li`
font-size: 16px;
min-width: 120px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;