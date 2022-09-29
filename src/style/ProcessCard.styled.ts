import styled from 'styled-components';

export const Wrapper = styled.div`
    width: var(--card-width);
    height: var(--card-half-width);
    height: 50vh;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--margin);
    border-radius: .4em;
    background-color: #b3b421;
`

export const Image = styled.div`
    background-image: url("../assets/01.jpg");
    width: var(--card-width);
    height: var(--card-height);
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