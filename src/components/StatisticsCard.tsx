import React from 'react';

import {
    Wrapper,
    Title,
    Number,
    SubTitle
} from '../style/StatisticsCard.styled'

const StatisticsCard: React.FC = () => {

    return (
        <Wrapper>
            <SubTitle>Mais de</SubTitle>
            <Number>2100</Number>
            <Title>Produtos criados</Title>
        </Wrapper>
    )
}

export default StatisticsCard