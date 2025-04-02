import styled from 'styled-components';

export const Card = styled.div`
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 16px;
    `

export const LinkButton = styled.a`
    color: ${(props) => props.theme.backgroundColor};
    font-size: 14px;
    background-color: ${(props) => props.theme.backgroundButton};
    text-decoration: none;
    padding: 4px 16px;
    display: inline-block; 
    margin-top: 24px;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
`    