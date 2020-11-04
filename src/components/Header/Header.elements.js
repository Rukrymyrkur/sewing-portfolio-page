import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDescription = styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    background-color: rgba(82, 82, 82, 0.4);
    letter-spacing: 2px;
    align-self: flex-end;
`;

export const HeaderContainer = styled.div`
    display: grid;
    min-height: calc(100vh - 277px - 50px);
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    min-width: 80vw;
    font-size: 3rem;
    letter-spacing: 2rem;
    justify-content: center;
    align-items: center;
    color: #fff;



    @media screen and (max-width: 991px){
    min-width: 100vw;
    min-height: calc(100vh - 50px);
    }
    @media screen and (max-width: 425px){
    }
`;

export const HeaderLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: #fff;
    padding: 10px 10px 10px 10px;

    &:hover{
        color: #fff;
        transition: 0.3s ease-out;
        background-color: #a1083b;
    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        width: 80%;

        display: table;

        &:hover{
            color: #a1083b;
            transition: all 0.3s ease;
        }
    }
`;
