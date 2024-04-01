'use client';
import Image from "next/image";
import Card from "./components/card";
import Drawer from "./components/drawer";
import styled from "styled-components";
import { useState } from "react";


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

type DrawerProps = {
  header: string;
  description: string;
  participants: string[];
};

export default function Home() {
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
      <Card
        onClick={()=> handleOpen("left", {
          header: "Drawer Header",
          description: "This is a drawer component.",
          participants: testParticipants,
        
        })}
        side = "left"
        header="Медицина"
        text="Анонс медицинской выставки."
        cardColor="#FB6D48"
      />
      <Card
        onClick={()=> handleOpen("left", {
          header: "Drawer Header2",
          description: "This is a drawer component.",
          participants: ["Participant 1", "Participant 2", "Participant 3"],
        
        })
        }
        side = "left"
        header="Инноватика и управление"
        text="Новые технологии в бизнесе"
        cardColor="#673F69"
      />
      </LeftRow>
      <RightRow>
      <Card
        onClick={()=> handleOpen("right", {
          header: "Drawer Header3",
          description: "This is a drawer component.",
          participants: ["Participant 1", "Participant 2", "Participant 3"],
        
        })}
        side = "right"
        header="Солнечная энергия"
        text="Чистая энергия в каждый дом"
        cardColor="#FFAF45"
      />
      <Card
        onClick={()=> handleOpen("right", {
          header: "Drawer Header4",
          description: "This is a drawer component.",
          participants: ["Participant 1", "Participant 2", "Participant 3"],
        
        })
        }
        side = "right"
        header="Hello, World!"
        text="This is a card component."
        cardColor="#FDAF7B"
      />
      </RightRow>
    </CardContainer>
    </StyledMain>
  );
}
