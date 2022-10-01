import styled from "styled-components";

export default function BotoesConcluidos(){
    const textCorConcluido = [{text: "Não Lembrei", cor: "#FF3030"}, {text: "Quase não lembrei", cor: "#FF922E"}, {text: "Zap!", cor: "#2FBE34"} ]
    return(
        <ContainerBotoes>
                {textCorConcluido.map((tc, i) => 
                     <BotaoConcluido key={i} cor={tc.cor}>{tc.text}</BotaoConcluido>
                )}
                </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  `;

const BotaoConcluido = styled.div`
    width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background-color: ${props => props.cor};
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
`;