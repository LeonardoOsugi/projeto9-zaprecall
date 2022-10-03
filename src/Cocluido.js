import styled from "styled-components";
import certo from "./assets/img/icone_certo.png"

import erro from "./assets/img/icone_erro.png"

import quase from "./assets/img/icone_quase.png"

let soma = 1;
export default function Concluido({index,status, setStatus, cor, text, setCount, setViraPergunta,  setTamanho, setCor, setDirecao, setNum, flashcards, setViraImg}){
    // text: "Não Lembrei", cor: "#FF3030"}, {text: "Quase não lembrei", cor: "#FF922E"}, {text: "Zap!", cor: "#2FBE34"
    function chekao(){
        if(soma <= 8){
            setCount(soma)
            soma++
        }

        const newStatus = [...status];
        if(cor === "#FF3030"){
            setViraImg(erro);
            newStatus[index] = "error"
        }else if( cor === "#FF922E"){
            setViraImg(quase);
            newStatus[index] = "quase"
        }else{
            setViraImg(certo);
            newStatus[index] = "zap"
        }
        setStatus(newStatus);
        setViraPergunta(flashcards)  
        setTamanho("35px")
        setCor("#FFFFFF") 
        setDirecao("row")
        setNum(0);
    }
    console.log(`status concluido `,status);
    return(
        <BotaoConcluido onClick={() => chekao()} cor={cor}>{text}</BotaoConcluido>
    )
}

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
        border: transparent;
        padding:5px;
`;