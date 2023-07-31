import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="signin">Aboutus</FooterLink>
              <FooterLink to="signin">How it Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Investors</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="signin">Aboutus</FooterLink>
              <FooterLink to="signin">How it Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Investors</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="signin">Aboutus</FooterLink>
              <FooterLink to="signin">How it Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Investors</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="signin">Aboutus</FooterLink>
              <FooterLink to="signin">How it Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Investors</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_Blank" aria-label="FaceBook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_Blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_Blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_Blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_Blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
