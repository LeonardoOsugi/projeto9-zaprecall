import styled from "styled-components";

import setp from "./assets/img/seta_play.png"

import setv from "./assets/img/seta_virar.png"

import { useState } from "react"



let num = 0;

export default function Cards({ flashcards, perguntas, respostas}) {

    const [viraImg, setViraImg] = useState(setp);

    const [viraPergunta, setViraPergunta] = useState(flashcards);

    const [tamanho, setTamanho] = useState("35px");

    const [cor, setCor] = useState("#FFFFFF");

    const [direcao, setDirecao] = useState("row");


    function virarCard() {
        console.log(num);
        if(num > 0){
            return setViraPergunta(respostas), setViraImg(null), num =0;
        }
        setViraImg(setv);
        setViraPergunta(perguntas);
        setTamanho("130px");
        setCor("#FFFFD5");
        setDirecao("column")
        num ++;
        // console.log(viraPergunta);
    }
    return (
        <PerguntaFechada  direcao={direcao} cor={cor} tamanho={tamanho}>
            <p>{viraPergunta}</p>
            <img onClick={() => virarCard()} src={viraImg} alt="" />
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
        color: #333333;
    }
  `;