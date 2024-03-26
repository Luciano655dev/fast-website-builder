import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledTree: any = styled.div`
  line-height: 1.3;
  width: 20vw;
  padding-top: 1em;
  padding-left: 1em;
`;
export const StyledFile: any = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: large;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  transition: 0.2s;

  &:hover{
    color: gray;
  }
`

export const StyledFolder: any = styled.div`
  cursor: pointer;
  width: 100%;
  padding-left: 10px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const FolderTitle = styled.span`
  margin: 0;
  font-size: larger;
  font-weight: bold;
`

export const Collapsible: any = styled.div`
  height: ${(p: any) => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;