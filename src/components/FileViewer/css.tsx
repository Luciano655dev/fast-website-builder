import styled from 'styled-components'
import ReactMarkdown from 'react-markdown';

export const ReactMarkdownStyled = styled(ReactMarkdown)`
    border-radius: 0.7em;
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    text-overflow: ellipsis;

    max-width: 70vw;
    height: 80vh;

    border: 3px solid gray;
    border-radius: 10px;
    padding: 4vh;
    @media (max-width: 774px) {
        max-width: 100vw;
        min-height: 30vh;
        max-height: 60vh;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`