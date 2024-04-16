'use client';
import Image from "next/image";
import Card from "./components/card";
import Drawer from "./components/drawer";
import styled from "styled-components";
import { useState } from "react";
import all from "./data.json";


const CardContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const StyledMain = styled.main`
  margin: 0;
`;

const LeftRow = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RightRow = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Drawer {
  drawerHead: string;
  drawerDescription: string;
  participants: string[];
}

interface Card {
  cardHead: string;
  cardMain: string;
  drawer: Drawer;
  cardColor: string;
}

type DrawerProps = {
  header: string;
  description: string;
  participants: string[];
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #333;
  color: white;
`;

export default function Home() {
  const cards = all as {left:Card[], right:Card[]};
  const [isOpen, setIsOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<"left" | "right">("left");
  const [drawerProps, setDrawerProps] = useState<DrawerProps>(
    {
      header: "",
      description: "",
      participants: [],
    }
  );
  const handleOpen = (side: "left" | "right", 
  drawerProps:{
    header: string;
    description: string;
    participants: string[];
  }
  ) => {
    setIsOpen(true);
    setDrawerSide(side);
    setDrawerProps(drawerProps);
  }
  const handleClose = () => {
    setIsOpen(false);
  }

  const testisipants = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(`Participant ${i}`);
    }
    return arr;
  }
  const testParticipants = testisipants();
  return (
    <StyledMain>
      <Drawer 
        handleClose={handleClose}
        drawerSide={drawerSide}
        header ={drawerProps.header}
        description={drawerProps.description}
        participants={drawerProps.participants}
        isOpen={isOpen}
      />
      <CardContainer>
      <LeftRow>
        {cards.left.map((card, index) => (
          <Card
            onClick={()=> handleOpen("left", {
              header: card.drawer.drawerHead,
              description: card.drawer.drawerDescription,
              participants: card.drawer.participants,
            })}
            side = "left"
            header={card.cardHead}
            text={card.cardMain}
            cardColor={card.cardColor}
            key={index}
          />
        ))}
      </LeftRow>
      <RightRow>
        {cards.right.map((card, index) => (
          <Card
            onClick={()=> handleOpen("right", {
              header: card.drawer.drawerHead,
              description: card.drawer.drawerDescription,
              participants: card.drawer.participants,
            })}
            side = "right"
            header={card.cardHead}
            text={card.cardMain}
            cardColor={card.cardColor}
            key={index}
          />
        ))}
      </RightRow>
    </CardContainer>
    <StyledFooter>
      Vifany&copy; 2024
    </StyledFooter>
    </StyledMain>
  );
}
