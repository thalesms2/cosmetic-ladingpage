import React from 'react';

import {
    Wrapper,
    Title,
    Description,
    SubTitle
} from '../style/StatisticsCard.styled'

const StatisticsCard: React.FC = () => {

    return (
        <Wrapper>
            <SubTitle>Mais de</SubTitle>
            <Description>2100</Description>
            <Title>Produtos criados</Title>
        </Wrapper>
    )
}

export default StatisticsCard