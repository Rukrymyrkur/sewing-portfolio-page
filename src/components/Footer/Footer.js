import React from "react";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  RightsWrap,
  WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksItems>
          <FooterLinkTitle>Clothing design</FooterLinkTitle>
          <FooterLink as="a" href="/about#started">
            How it all started
          </FooterLink>
          <FooterLink as="a" href="/about#commissions">
            Commissions
          </FooterLink>
          <FooterLink as="a" href="/about#other-projects">
            Other projects
          </FooterLink>
        </FooterLinksItems>

        <FooterLinksItems>
          <FooterLinkTitle>Contact me</FooterLinkTitle>
          <FooterLink as="a" href="/contact#email">
            Write me an email
          </FooterLink>
          <FooterLink as="a" href="/contact#other">
            Other ways to reach me
          </FooterLink>
        </FooterLinksItems>

        <FooterLinksItems>
          <FooterLinkTitle>Web development</FooterLinkTitle>
          <FooterLink as="a" href="/coding#how-was-it-done">
            Why I am creating this page
          </FooterLink>
          <FooterLink as="a" href="/coding#struggles">
            Things that got me stuck
          </FooterLink>
          <FooterLink as="a" href="/coding#further">
            Thoughts on improvement
          </FooterLink>
        </FooterLinksItems>
      </FooterLinksContainer>

      <RightsWrap>
        <WebsiteRights>Neringa Surmilavičiūtė 2020</WebsiteRights>
      </RightsWrap>
    </FooterContainer>
  );
};

export default Footer;
