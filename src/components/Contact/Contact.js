import React from 'react';
import { Container } from '../../globalStyles';
import MyForm from "../Form/MyForm";
import {
    EmailContainer,
    SocialContainer,
    SocialLinks,
    SocialLink,
    ContactContainer
} from './Contact.elements';
import { FaCodepen, FaFacebookMessenger, FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

const Contact = () => {
    return (
        <Container>
            <ContactContainer>
                <EmailContainer id="email">
                    <MyForm />
                </EmailContainer>
                <SocialContainer id="other">
                    <SocialLinks>
                        <SocialLink href="https://codepen.io/Rukrymyrkur" target="_blank"><FaCodepen />Codepen</SocialLink>
                        <SocialLink href="https://github.com/Rukrymyrkur" target="_blank"><FaGithub />Github</SocialLink>
                        <SocialLink href="/" target="_blank"><FaLinkedin />LinkedIn</SocialLink>
                        <SocialLink href="https://www.pinterest.com/rukrymyrkur" target="_blank"><FaPinterest />Pinterest</SocialLink>
                        <SocialLink href="https://www.instagram.com/neringasurm/" target="_blank"><FaInstagram />Instagram</SocialLink>
                        <SocialLink href="https://www.facebook.com/neringasurm" target="_blank"><FaFacebookMessenger />Messenger</SocialLink>
                    </SocialLinks>
                </SocialContainer>
            </ContactContainer>
        </Container>
    )
}

export default Contact;
