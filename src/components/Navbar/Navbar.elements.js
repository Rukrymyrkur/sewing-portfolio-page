import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
    background: #000;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    margin-left: 50px;
    margin-right: 50px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-self: flex-end;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 50px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #000;
    }
`;

export const NavItem = styled.li`
    height: 50px;
    border-bottom: 2px solid transparent;

    &:hover{
        color: #a1083b;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem 0 1.5rem;
    height: 100%;
    
    &:hover{
        color: #a1083b;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #a1083b;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;