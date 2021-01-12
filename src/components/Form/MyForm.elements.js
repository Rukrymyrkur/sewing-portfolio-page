import styled from "styled-components";

export const StyledForm = styled.form`
  min-width: 60vw;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;

  & > h2 {
    margin-left: 1rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0px;
    width: 100vw;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0.5em;
  width: 90%;
  margin: 0.5em;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    background: palevioletred;
  }
`;

export const MessageArea = styled.textarea`
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0.5em;
  height: 300px;
  max-height: 500px;
  resize: vertical;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Button = styled.button`
  background-color: palevioletred;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  margin: 0.5rem;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #a1083b;
    transition: 0.3s ease-out;
  }
  &:active {
    color: #fff;
    background-color: #a1083b;
  }
`;
