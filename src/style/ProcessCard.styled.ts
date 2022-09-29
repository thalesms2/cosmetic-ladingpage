import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 350px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    margin: .5em;
    border-radius: .4em;
    background-color: #b3b421;
`

export const Image = styled.div`
    background-image: url("../assets/01.jpg");
    max-width: 350px;
    min-height: 250px;
    background-size: cover;
    border-radius: .4em .4em 0 0;
`

export const Box = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`

export const Title = styled.h3`
    text-transform: uppercase;
`

export const SubTitle = styled.h3`

`

export const Description = styled.p`
    margin-bottom: 2em;
`