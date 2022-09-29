import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 30px;
    border-radius: .2em;
    background-color: #808080;
    margin: .5em;
    max-width: 350px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
        background-color: #3f2aff;
        color: white;
        transition: ease-in-out .5s;
    }
`

export const Icon = styled.div`
    font-size: 40px;
`

export const Title = styled.h3`

`

export const Description = styled.p`

`

export const SubTitle = styled.h4`
    text-transform: uppercase;
`

export const List = styled.ul`
    li {
        list-style-type: none;
        line-height: 2em;
    }
    li:before {
        content: "\f054";
        font-family: FontAwesome;
        margin-right: .4em;
    }

`