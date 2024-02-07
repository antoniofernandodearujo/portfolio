import styled from "styled-components";
import { Container } from "react-bootstrap"; 

export const ScrollToTopButton = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #445964;
    margin-right: -50px;
    transition: background-color 0.3s ease-out;

    margin-bottom: 20px;

    &:hover {
        background-color: #5f7a8c;
    }

    @media (max-width: 720px) {
        margin-right: 10px;
    }
`;

export const ContainerButton = styled(Container)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`