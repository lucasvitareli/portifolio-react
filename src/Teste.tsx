import styled from "styled-components";

type BotaoProps = {
    main?: boolean;
    fontSize?: string;
    circular?: boolean; // o sinal de interrogação indica que a propriedade é opcional
}

const Botao = styled.button<BotaoProps>`
    background-color: ${props => props.main ? "green" : "orange"};
    font-size: ${props => props.fontSize || "16px"};
    color: white;
    padding: 10px;
    border: 1px solid black;
    border-radius: ${props => props.circular ? "50%" : "5px"}; 
`;

const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: white;  
    
    span {
        font-weight: bold;
        cursor: pointer;}
`

function Teste() {
    return (
        <>
            <Botao main fontSize="18px">Enviar</Botao>
            <Botao circular fontSize="14px">Cancelar</Botao>
            <BotaoPerigo as="a">
                <span>
                    Excluir Tudo
                </span >
            </BotaoPerigo>
        </>
    );
}

export default Teste;