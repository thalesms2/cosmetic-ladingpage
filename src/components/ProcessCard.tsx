import React from 'react'


import {
    Wrapper,
    Image,
    Box,
    Title,
    SubTitle,
    Description
} from '../style/ProcessCard.styled'

const ProcessCard: React.FC = () => {

    return (
        <Wrapper>
            <Image />
            <Box>
                <Title>ETAPA 1</Title>
                <hr />  
                <SubTitle>Análise e Definição de Projeto</SubTitle>
                <Description>
                    Em reuniões com nosso time de consultores é feita a
                    análise de suas necessidades e é determinado o escopo
                    do seu projeto.
                </Description>
            </Box>
        </Wrapper>
    )
}

export default ProcessCard