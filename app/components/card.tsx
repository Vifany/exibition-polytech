import React from 'react';
import styled from 'styled-components';

interface CardProps {
  header: string;
  text: string;
  cardColor: string;
  side: 'left' | 'right';
  onClick: () => void;
}

const CardContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding-top:0;
  max-width: 100%;
  height: 100vh;
  transition: 610ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #EBE4D1;
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 0;
  overflow-x: hidden;
`;

const CardHeader = styled.h2`
  margin-left: 3vh;
  font-size: 3vw;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  margin-left: 3vh;
  margin-right: 3vh;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 7.5vw;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1em;
  overflow-y: hidden;
  overflow-x: hidden;
  overflow-wrap: anywhere;
  transition: letter-spacing 380ms linear,
    font-size 380ms cubic-bezier(0.075, 0.82, 0.165, 1);
  ${CardContainer}:hover &{
    letter-spacing: 0;
    text-align: left;
    font-size: 9vh;
    overflow-wrap: normal;
  }`;

const Card: React.FC<CardProps> = ({ 
  header, 
  text, 
  cardColor,
  side,
  onClick
  }) => {
  return (
    <CardContainer backgroundColor={cardColor} onClick ={onClick}>
      <CardHeader>{header}</CardHeader>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;