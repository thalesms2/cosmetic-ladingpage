import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--card-width);
    height: var(--card-half-height);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #b77777;
    padding: 2em;
    margin-bottom: var(--margin);
`

export const Title = styled.h3`
    background-color: #67bbbb;
    border-radius: .2em;
    padding: .5em 4em;
`

export const Description = styled.span`
    font-size: 3em;
    font-weight: bold;
    color: orange;
`

export const SubTitle = styled.h3`
    text-transform: uppercase;
`