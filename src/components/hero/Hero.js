import React from "react";
import Image from "next/image";
import { Section, Card, Title, Description } from "./HeroStyles";
import img from "/public/shop-cta-md.jpg";

function Hero() {
  const STYLES = {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    margin: "0",
    padding: "0",
    zIndex: "-1000",
    backgroundColor: "black",
    objectFit: "contain",
    backgroundSize: "cover",
  };

  return (
    <Section>
      <Image src={img} style={STYLES} />
      <Card>
        <Title>A CONSOLE FOR EVERY WORKFLOW</Title>
        <Description>Discover the perfect console for yours.</Description>
      </Card>
    </Section>
  );
}

export default Hero;
