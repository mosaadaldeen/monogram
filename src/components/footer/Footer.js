import React from "react";
import {
  SectionFooter,
  Section1,
  SectionTitle,
  Input,
  Span,
  Button,
  SocialIcons,
  SocialIcon,
  Form,
} from "./FooterStyles";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <SectionFooter>
      <Section1>
        <SectionTitle>MONOGRAM</SectionTitle>
        <div>
          <Span>305 King St. W.</Span>
          <Span>Suite 502</Span>
          <Span>Kitchener, ON</Span>
          <Span>Canada</Span>
        </div>
      </Section1>
      <Section1>
        <SectionTitle>QUICK LINKS</SectionTitle>
        <div>
          <Span>Home</Span>
          <Span>How it Works</Span>
          <Span>Shop</Span>
          <Span>Download</Span>
        </div>
      </Section1>
      <Section1>
        <SectionTitle>HELP</SectionTitle>
        <Span> Support Center</Span>
        <Span>FAQs</Span>
        <Span> Support Center</Span>
        <Span>Shipping and Sales</Span>
        <Span>Palette Support</Span>
      </Section1>
      <Section1>
        <SectionTitle>INFORMATION</SectionTitle>
        <Span>About Us</Span>
        <Span>Work with us</Span>
        <Span>Privacy Policy</Span>
        <Span>Terms of Use</Span>
        <Span>Terms of Sale</Span>
        <Span>Press Kit</Span>
      </Section1>
      <Section1>
        <SectionTitle>SUBSCRIBE TO MONOGRAM</SectionTitle>
        <Span>
          Master productivity with Creative Console and get all the latest
          Monogram news.
        </Span>
        <Form>
          <Input />
          <Button>Submit</Button>
        </Form>
        <SocialIcons>
          <SocialIcon>
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon>
            <AiOutlineTwitter />
          </SocialIcon>
          <SocialIcon>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon>
            <AiFillYoutube />
          </SocialIcon>
        </SocialIcons>
        <Span>© Monogram 2021</Span>
        <Span>Protected by reCAPTCHA - Privacy - Terms</Span>
      </Section1>
    </SectionFooter>
  );
}

export default Footer;
