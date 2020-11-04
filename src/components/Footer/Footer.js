import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubheading,
    FooterSubtext,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIcon,
    SocialIconLink,
} from './Footer.elements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksItems>
                    <FooterLinkTitle>Clothing design</FooterLinkTitle>
                    <FooterLink as='a' href='/about#started'>How it all started</FooterLink>
                    <FooterLink as='a' href='/about#commissions'>Commissions</FooterLink>
                    <FooterLink as='a' href='/about#other-projects'>Other projects</FooterLink>
                </FooterLinksItems>

                <FooterLinksItems>
                    <FooterLinkTitle>Contact me</FooterLinkTitle>
                    <FooterLink as="a" href="/contact#email">Write me a direct email</FooterLink>
                    <FooterLink as="a" href="/contact#other">Other ways to write me</FooterLink>
                </FooterLinksItems>

                <FooterLinksItems>
                    <FooterLinkTitle>Web development</FooterLinkTitle>
                    <FooterLink as="a" href="/coding#how-was-it-done">Why I am creating this page</FooterLink>
                    <FooterLink as="a" href="/coding#struggles">Things that got me stuck</FooterLink>
                    <FooterLink as="a" href="/coding#further">Thoughts on improvement</FooterLink>
                </FooterLinksItems>
            </FooterLinksContainer >

            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>Neringa Surmilavičiūtė 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://github.com/Rukrymyrkur' target="_blank" aria-label="github">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer >

    );
};

export default Footer;
