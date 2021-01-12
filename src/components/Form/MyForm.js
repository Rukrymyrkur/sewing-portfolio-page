import React, { useState, useEffect } from "react";
import {
  StyledForm,
  Input,
  MessageArea,
  FormContainer,
  Button,
} from "./MyForm.elements";
import { Container } from "../../globalStyles";

const MyForm = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <FormContainer>
      <StyledForm
        name="contact"
        method="POST"
        action="contact/?success=true"
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
  );
};

export default MyForm;
