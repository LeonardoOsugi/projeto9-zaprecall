import styled from "styled-components";

import Logo from "./ContainerLogo"

import Perguntas from "./Perguntas"


import { useState } from "react";
import GlobalStyle from "./assets/css/GlobalStyle";

export default function App() {

    const [count, setCount] = useState(0);
    return (
        <>
            <GlobalStyle />
            <ScreenContainer>
                <Logo />
                <Perguntas setCount={setCount} />
                <FooterConcluidos>

                    {count}/8 CONCLUÍDOS
                </FooterConcluidos>
            </ScreenContainer>
        </>
    );
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  `;

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    display: flex;
  `;