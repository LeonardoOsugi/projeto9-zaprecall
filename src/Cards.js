import styled from "styled-components";

import setp from "./assets/img/seta_play.png"

import setv from "./assets/img/seta_virar.png"

import { useState } from "react"

import BotoesConcluidos from "./BotoesConcluidos"

export default function Cards({ index, flashcards, perguntas, respostas, setCount, status, setStatus}) {

    const [viraImg, setViraImg] = useState(setp);

    const [viraPergunta, setViraPergunta] = useState(flashcards);

    const [tamanho, setTamanho] = useState("35px");

    const [cor, setCor] = useState("#FFFFFF");

    const [direcao, setDirecao] = useState("row");

    const[num, setNum] = useState(0);


    function virarCard() {
        console.log(num);
        if(num > 0){
            return setViraPergunta(respostas), setViraImg(null), setNum(num-1);
        }
        setViraImg(setv);
        setViraPergunta(perguntas);
        setTamanho("130px");
        setCor("#FFFFD5");
        setDirecao("column")
        setNum(num+1);
    }

    function handleColor(){
        console.log(`status${index} `,status[index])
        console.log(status[index] === undefined)
        if(status[index] === undefined){
            console.log("und")
            return "#333333"
        } else if(status[index] === "error"){
            console.log("error")
            return "#FF3030"
        } else if(status[index] === "quase"){
            console.log("quase")
            return "#FF922E"
        }else if(status[index] === "zap"){
            console.log("zap")
            return "#2FBE34"
        }
    }
    return (
        <PerguntaFechada color={handleColor()} decoration={status[index] === undefined?"":"line-through"} direcao={direcao} cor={cor} tamanho={tamanho}>
            <p >{viraPergunta}</p>
            <img onClick={status[index] === undefined?virarCard:null} src={viraImg} alt="" />

            <BotoesConcluidos status={status} setStatus={setStatus} setCount={setCount} viraPergunta={viraPergunta} respostas={respostas} index={index} setViraPergunta={setViraPergunta}  setTamanho={ setTamanho} setCor={setCor} setDirecao={setDirecao} setNum={setNum} flashcards={flashcards} setViraImg={setViraImg}
            />
        </PerguntaFechada>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: ${props => props.tamanho};
    background-color: ${props => props.cor};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: ${props => props.direcao};
    align-items: baseline;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.color};
        text-decoration: ${props => props.decoration};
    }
  `;