import React from "react";
import { Section, Title, P } from "./ConsoleStyle";
import img from "/public/5.webp";

function Console() {
  return (
    <Section img={img.src}>
      <Title>CREATE YOUR OWN CONSOLE</Title>
      <P>Add-on to make it Perfect.</P>
    </Section>
  );
}

export default Console;
