import styled from "styled-components";
import { Container } from 'react-bootstrap'

export const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
    font-size: 22pt;
    font-weight: 600;
    margin-bottom: 20px;

    color: #445964;

    @media (max-width: 720px) {
        font-size: 20pt;
    }
`

export const MyCard = styled(Container)`
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: #f8f9fa;
    margin-bottom: 20px;
    text-align: justify;
`;

export const MyCardText = styled.p`
    font-size: 16pt;
    padding: 20px;
    color: #445964;

    @media (max-width: 720px) {
        font-size: 14pt;
    }
`;