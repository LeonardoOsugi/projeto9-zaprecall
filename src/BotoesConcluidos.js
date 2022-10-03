import styled from "styled-components";

import Concluido from "./Cocluido"

export default function BotoesConcluidos({index,status, setStatus, setCount, viraPergunta, respostas,setViraPergunta,  setTamanho, setCor, setDirecao, setNum, flashcards, setViraImg}){
    const textCorConcluido = [{text: "Não Lembrei", cor: "#FF3030"}, {text: "Quase não lembrei", cor: "#FF922E"}, {text: "Zap!", cor: "#2FBE34"} ]
    return(
        <ContainerBotoes display={viraPergunta === respostas?"flex":"none"}>
                {textCorConcluido.map((tc, i) => 
                     <Concluido key={i} cor={tc.cor} text={tc.text} setCount={setCount} index={index} status={status} setStatus={setStatus}setViraPergunta={setViraPergunta}  setTamanho={ setTamanho} setCor={setCor} setDirecao={setDirecao} setNum={setNum} flashcards={flashcards} setViraImg={setViraImg}/>
                )}
        </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: ${props => props.display};
    width: 100%;
    justify-content: space-around;
    margin-top: 5px;
  `;