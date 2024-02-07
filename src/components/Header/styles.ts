// styles.ts
import styled, { keyframes } from "styled-components";
import { Container } from "react-bootstrap"

const blinkAnimation = keyframes`
  0%, 50%, 100% {
      opacity: 1;
  }
  25%, 75% {
      opacity: 0;
  }
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContentImageAndText = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const ContentTextAndBall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #445964;
  width: 270px;
  border-radius: 16px;
`;

export const Availability = styled.h2`
  font-size: 1rem;
  margin-top: 8px;
  color: #fff;
  max-width: 270px;
`;

export const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #2ECC71;
  animation: ${blinkAnimation} 4s infinite;
`;

export const Title = styled.h1`
  color: #445964;
  font-weight: 500;
  font-size: 2rem;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`

export const Text = styled.span`
  color: #445964;
  font-size: 1.2rem;
  text-align: justify;
  max-width: 100%;
`

export const ContainerIcons = styled(Container)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
`

export const Icon = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #445964;

  transition: all ease-in .3s;

  &:hover {
    opacity: 0.7;
  }
`
