import styled from "styled-components";
//react-bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from "next/image";

export const NavBar = styled(Navbar)`
    background-color: none;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

export const ContainerImageAndName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 3rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        margin-left: 0;
    }

`

export const ImageProfile = styled(Image)`
    @media (max-width: 720px) {
        width: 40px;
        height: 40px;
    }
`;

export const Name = styled.h1`
    text-align: center;
    color: #445964;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 7px;

    @media (max-width: 720px) {
        font-size: 1.5rem;
    }
`

export const NavBarToggle = styled(Navbar.Toggle)`
    background-color: #ffffff;
`;

export const NavBarCollapse = styled(Navbar.Collapse)`
    justify-content: flex-end;
`;

export const ContainerLinksAndButton = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1024px) {
        justify-content: center;
    }   

`

export const MyNav = styled(Nav)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 3rem;

    @media (max-width: 1024px) {
        width: auto;
        margin-right: 0;
    }

    
`;

export const MyNavlink = styled.a`
    text-decoration: none;
    color: #445964;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;

    transition: all ease-in 0.2s;

    &:hover {
        opacity: .7;
    }
`;

export const Separate = styled.span`
    width: 1px;
    height: 25px;
    background-color: #445964;
    font-weight: 600;
    margin: 0 1rem;
`