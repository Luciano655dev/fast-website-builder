import styled from 'styled-components'

export const BodyStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TreeContainer = styled.div`
    max-width: 20vw;
    height: 90vh;

    overflow-y: scroll;
    overflow-x: scroll;
`

export const FileContainer = styled.div`
    width: 80vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 2px solid gray;
`