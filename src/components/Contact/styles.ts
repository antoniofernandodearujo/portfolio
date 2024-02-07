import styled from "styled-components";
import { Container } from 'react-bootstrap'

export const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`

export const Title = styled.h1`
    font-size: 22pt;
    font-weight: 600;
    margin-bottom: 20px;

    color: #445964;

    @media (max-width: 720px) {
        font-size: 20pt;
    }
`

export const CardTextContact = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Text = styled.p`
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
    color: #445964;

    @media (max-width: 720px) {
        font-size: 1.4rem;
    }
`;

export const TextContact = styled.a`
    text-decoration: none;
    position: relative;
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 1.35rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #445964;
    font-weight: bold;
    overflow: hidden;
    margin-bottom: 20px;

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #4f96bd; /* Cor da linha */
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        opacity: 0.9;

        &::before {
        transform: scaleX(1);
        }
    }

    @media (max-width: 720px) {
        margin-right: 0;
        font-size: 16pt;
    }
`

export const ContainerContact = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;