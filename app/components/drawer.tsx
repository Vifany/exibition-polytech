import React from 'react';
import styled from 'styled-components';

interface DrawerProps {
  drawerSide: 'left' | 'right';
  header: string;
  description: string;
  participants: string[];
  isOpen: boolean;
  handleClose: () => void;
}

const DrawerContainer = styled.div<{ drawerSide: 'left' | 'right', isOpen: boolean }>`
  position: fixed;
  top: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${({ drawerSide }) => (drawerSide === 'left' ? 'right: 0;' : 'left: 0;')}
  width: 38vw;
  height: 100%;
  background-color: rgba(205, 205, 205, 0.98);
  padding: 20px;
  overflow-y: auto;
`;

const DrawerHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const DrawerDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const DrawerParticipants = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DrawerParticipant = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 5vh;
  font-weight: bold;
  color: #000;
`;

const Drawer: React.FC<DrawerProps> = ({
  drawerSide,
  header,
  description,
  participants,
  isOpen,
  handleClose,
}) => {
  return (
    <DrawerContainer drawerSide={drawerSide} isOpen={isOpen} >
      <IconButton onClick={handleClose}>X</IconButton>
      <DrawerHeader>{header}</DrawerHeader>
      <DrawerDescription>{description}</DrawerDescription>
      <DrawerParticipants>
        {participants.map((participant, index) => (
          <DrawerParticipant key={index}>{participant}</DrawerParticipant>
        ))}
      </DrawerParticipants>
    </DrawerContainer>
  );
};

export default Drawer;