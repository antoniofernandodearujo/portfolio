import styled from "styled-components";
import { Container, Modal } from "react-bootstrap";

export const ButtonOpenModal = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 1.5rem;
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

`;

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 0;
    border: none;
  }
`;

export const ContainerModal = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h1`
  font-size: 2rem;
  color: #445964;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #445964;
  margin-bottom: 20px;
  text-align: center;
`;

export const Link = styled.a`
  color: #445964;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  font-weight: 700;

  &:hover {
    color: #4f96bd;
  }
`;

export const Seperate = styled.hr`
  width: 100%;
  border: 1px solid #445964;
  margin-bottom: 20px;
`;