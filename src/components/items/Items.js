import React from "react";
import img from "/public/1.webp";
import img2 from "/public/2.webp";
import img3 from "/public/3.webp";
import {
  Section,
  Card,
  Image,
  First,
  Desc,
  Details,
  LastCard,
  P,
} from "./ItemsStyles";

function Items() {
  return (
    <Section>
      <First>
        <Card>
          <Image src={`${img.src}`} />
          <Details>
            <P>TRAVELER CONSOLE</P>
            <p>€399.99</p>
          </Details>
          <Desc>Ideal for music & audio. Adaptable to any workflow.</Desc>
        </Card>

        <Card>
          <Image src={`${img3.src}`} />
          <Details>
            <P>STUDIO CONSOLE</P>
            <p>€499.99</p>
          </Details>
          <Desc>Ideal for music & audio. Adaptable to any workflow.</Desc>
        </Card>
      </First>

      <LastCard>
        <Image src={`${img2.src}`} />
        <Details>
          <P>MASTER CONSOLE</P>
          <p>€599.99</p>
        </Details>
        <Desc>Ideal for music & audio. Adaptable to any workflow.</Desc>
      </LastCard>
    </Section>
  );
}

export default Items;
