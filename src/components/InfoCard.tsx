import React from 'react';

import { BsFillPeopleFill } from "react-icons/bs";

import {
    Wrapper,
    Icon,
    Title,
    Description,
    SubTitle,
    List
} from '../style/InfoCard.styled';

const InfoCard: React.FC = () => {

    return (
        <Wrapper>
            <Icon>
                <BsFillPeopleFill/>
            </Icon>
            <Title>Equipes multidisciplinares de alta performance</Title>
            <Description>
                Colaboratividade multidisciplinar para gerar ideias transformadoras: 
                Comercial e Projetos, Ciência Aplicada à Cosmetologia, Regulatório, 
                Marketing e Inteligência de Mercado, Desenvolvimento Humano e Organizacional, 
                Financeiro, Processos e Melhoria Continua, Garantia da Qualidade.
            </Description>
            <hr />
            <SubTitle>Benefícios</SubTitle>
            <List>
                <li>Profissionais acima da média de mercado</li>
                <li>Cultura de desenvolvimento</li>
                <li>Empatia 360°</li>
            </List>
        </Wrapper>
    );
};

export default InfoCard;