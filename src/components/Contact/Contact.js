import React, { useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import {
  EmailContainer,
  SocialContainer,
  SocialLinks,
  SocialLink,
  ContactContainer,
  StyledForm,
  Input,
  MessageArea,
  FormContainer,
  Button,
} from "./Contact.elements";
import {
  FaCodepen,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <Container>
      <ContactContainer>
        <EmailContainer id="email">
          <FormContainer>
            <StyledForm
              name="contact"
              method="POST"
              // action="/contact/?success=true"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h2>Write me!</h2>
              <Input type="email" name="email" placeholder="your email" />
              <Input required type="name" name="name" placeholder="your name" />
              <MessageArea
                required
                id="message"
                name="message"
                placeholder="your message"
              />
              <Button type="submit">Send message</Button>
              {success && <p>Thank You!</p>}
            </StyledForm>
          </FormContainer>
        </EmailContainer>
        <SocialContainer id="other">
          <SocialLinks>
            <SocialLink href="https://codepen.io/Rukrymyrkur" target="_blank">
              <FaCodepen />
              Codepen
            </SocialLink>
            <SocialLink href="https://github.com/Rukrymyrkur" target="_blank">
              <FaGithub />
              Github
            </SocialLink>
            <SocialLink href="/" target="_blank">
              <FaLinkedin />
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.pinterest.com/rukrymyrkur"
              target="_blank"
            >
              <FaPinterest />
              Pinterest
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/neringasurm/"
              target="_blank"
            >
              <FaInstagram />
              Instagram
            </SocialLink>
            <SocialLink
              href="https://www.messenger.com/neringasurm"
              target="_blank"
            >
              <FaFacebookMessenger />
              Messenger
            </SocialLink>
          </SocialLinks>
        </SocialContainer>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
