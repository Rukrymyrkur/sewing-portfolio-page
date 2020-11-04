import React from "react";
import {
    StyledForm,
    Input,
    MessageArea,
    FormContainer,
    Button,
} from './MyForm.elements';
import { Container } from '../../globalStyles';

const MyForm = () => {
    return (
        <Container>
            <FormContainer>
                <StyledForm
                    name="contact"
                    method="post"
                >
                    <Input type="hidden" name="form-name" value="contact" />
                    <h2>Write me!</h2>
                    <Input required type="email" name="email" placeholder="your email" />
                    <Input required type="name" name="name" placeholder="your name" />
                    <MessageArea required id="message" name="message" placeholder="your message" />
                    <Button type="submit">Send message</Button>
                </StyledForm>
            </FormContainer>
        </Container>
    )
}

export default MyForm;