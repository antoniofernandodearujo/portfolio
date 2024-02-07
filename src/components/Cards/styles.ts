import styled from "styled-components";
//react-bootstrap
import { Container, Card } from 'react-bootstrap';

export const ContainerCards = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 22pt;
    font-weight: 600;

    color: #445964;

    @media (max-width: 720px) {
        font-size: 20pt;
    }
`

export const ContentCards = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 50px;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
`

export const MyCard = styled(Card)`
    width: 390px;
    height: 370px;
    margin-bottom: 20px;
    background-color: #445964;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all ease-in 0.3s;
    gap: 10px;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 720px) {
        width: 100%;
    }
`

export const MyCardTitle = styled(Card.Title)`
    font-size: 14.5pt;
    color: #fff;
`

export const MyCardText = styled(Card.Text)`
    text-align: justify;
    font-size: 12.5pt;
    color: #fff;
`

export const MyCardTechs = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const TitleTechs = styled.h1`
    margin-top: 15px;
    font-weight: 600;
    text-decoration: underline;
    font-size: 12.5pt;
    color: #fff;
`

export const MyCardLink = styled(Card.Link)`
    font-size: 12.5pt;
    color: #fff;
    font-weight: 600;

    transition: all ease .3s;

    &:hover {
        opacity: .7;
    }
`

export const ContentButtonModal = styled(Container)`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`