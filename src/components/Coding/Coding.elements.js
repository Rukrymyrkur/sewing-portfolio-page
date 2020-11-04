import styled from "styled-components";
import { Container } from '../../globalStyles';

export const CodingSection = styled.div`
    &:before{
        display: block; 
        content: " "; 
        margin-top: -50px; 
        height: 50px; 
        visibility: hidden; 
        pointer-events: none;
    }
    
    &:target {
        background: rgba(128, 128, 128, 0.2);
    }

    width: 70vw;
    margin-left: auto;
    margin-right: auto;
    padding: 70px 100px 50px 100px;
    border-bottom: 2px solid #000;
    justify-self: center;
    align-items: center;
    color: #000;

    /* @media screen and (max-width: 991px){
        padding: 50px 10px 50px 10px;
    } */

    @media screen and (max-width: 425px){
        padding: 70px 30px 20px 30px;
        width: 100vw;  
    }
    ${Container}{
    }
`;

export const TitleSec = styled.h1`
    font-size: 1.5rem;
    letter-spacing: 5px;
    background-color: #000;
    color: #fff;
    display: inline-block;
    padding: 0 1rem 0 1rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    padding-top: 1rem;
`;

export const ListItems = styled.ul`
`;

export const List = styled.div`
    font-family: Georgia;
    letter-spacing: 1px;
    line-height: 1.5rem;
    white-space: pre-wrap;

    .strong {
        font-weight: 700;
    }

    .externalLink, .internalLink{
        font-family: Georgia;
        letter-spacing: 1px;
        line-height: 1.5rem;
        text-decoration: none;
        background-color: #a1083b;
        color: #fff;
        padding-left: 5px;
        padding-right: 5px;

        &:hover{
        background-color: #000;
        transition: 0.3s ease-out;
        }
    }

    @media screen and (max-width: 425px){
        line-height: 1.2rem;
    }
`;