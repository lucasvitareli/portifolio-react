import styled from "styled-components";
import { P } from "../../components/Paragraph/styles";

export const SidebarContainer = styled.div`
    display: block;
    text-align: center;
    position: sticky;
    top: 80px;
    left: 0;
    
`

export const Username = styled(P)`
    text-align: center;
    font-style: italic;
`

export const Description = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 16px;
`

export const ThemeButton = styled.button`
    background-color: ${(props) => props.theme.mainColor};
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.backgroundColor};
    border-radius: 12px;
    padding: 8px;
    cursor: pointer;
    margin-bottom: 40px;
    `