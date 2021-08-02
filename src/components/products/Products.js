import React from "react";
import { Section, Product, Image, Details } from "./ProductsStyles";
import img6 from "/public/6.webp";
import img7 from "/public/7.webp";
import img8 from "/public/8.webp";
import img9 from "/public/9.webp";

function Products() {
  return (
    <Section>
      <Product>
        <Image src={`${img6.src}`} />
        <Details>
          <h3>MONOGRAM CORE</h3>
          <p>$149.00</p>
        </Details>
      </Product>

      <Product>
        <Image src={`${img7.src}`} />
        <Details>
          <h3>ORBITER MODULE</h3>
          <p>$149.00</p>
        </Details>
      </Product>

      <Product>
        <Image src={`${img8.src}`} />
        <Details>
          <h3>DIAL MODULE</h3>
          <p>$99.00</p>
        </Details>
      </Product>

      <Product>
        <Image src={`${img9.src}`} />
        <Details>
          <h3>SLIDER MODULE</h3>
          <p>$129.00</p>
        </Details>
      </Product>
    </Section>
  );
}

export default Products;
