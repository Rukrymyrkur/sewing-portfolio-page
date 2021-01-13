import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: calc(100vh - 277px - 50px);

  @media screen and (min-width: 425px) {
    min-height: calc(100vh - 460px - 50px);
  }
`;

export const EmailContainer = styled.div`
  &:before {
    display: block;
    content: " ";
    margin-top: -50px;
    height: 50px;
    visibility: hidden;
    pointer-events: none;
  }
  padding: 70px 10px 10px 10px;

  @media screen and (max-width: 425px) {
    width: 100vw;
  }
`;

export const SocialContainer = styled.div`
  &:before {
    display: block;
    content: " ";
    margin-top: -50px;
    height: 50px;
    visibility: hidden;
    pointer-events: none;
  }

  padding: 70px 20px 50px 20px;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;

  @media screen and (max-width: 425px) {
    padding: 70px 10px 10px 10px;
    width: 100vw;
    display: block;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 425px) {
  }
`;

// export const SocialLinkContainer = styled.div`
//     display: flex;

//     @media screen and (min-width: 425px){

// }
//     @media screen and (max-width: 425px){
//         padding: 5px;
// }
// `;

export const SocialLink = styled.a`
  background-color: #f1f1f1;
  width: 200px;
  margin: 10px;
  text-align: center;

  display: grid;
  justify-items: center;
  text-decoration: none;
  color: #000;
  padding: 1rem;
  font-size: 1.2rem;

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }

  &:hover {
    color: #a1083b;
    transform: scale(1.1);
    transition: 0.3s ease-out;
    border-radius: 5px;
    border: none;
  }
  &:active {
    color: #fff;
    border: 1px solid #a1083b;
    background-color: #a1083b;
  }
`;

export const StyledForm = styled.form`
  z-index: 999;
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
