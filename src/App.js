import styled from "styled-components";

import logo from "./assets/img/logo.png"

import setP from "./assets/img/seta_play.png"

const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8" ]

export default function App() {
    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </LogoContainer>
            {perguntas.map((p, i) => 
                <PerguntaFechada key={i}>
                    <p>{p}</p>
                    <img src={setP} />
                </PerguntaFechada>
            )}
            <FooterConcluidos>
                <ContainerBotoes>
                    <BotaoConcluido1>Não Lembrei</BotaoConcluido1>
                    <BotaoConcluido2>Quase não lembrei</BotaoConcluido2>
                    <BotaoConcluido3>Zap!</BotaoConcluido3>
                </ContainerBotoes>
                0/4 CONCLUÍDOS
            </FooterConcluidos>
        </ScreenContainer>
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

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img{
        width: 52px;
    }

    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
   
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

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  `;

const BotaoConcluido1 = styled.div`
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
        background-color: #FF3030;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
`;

const BotaoConcluido2 = styled.div`
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
        background-color: #FF922E;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
`;

const BotaoConcluido3 = styled.div`
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
        background-color: #2FBE34;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
`;

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
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