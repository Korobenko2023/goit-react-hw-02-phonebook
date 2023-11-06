import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const ContactFormForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
margin-right: auto;
margin-left: auto; 
 text-align: left;   
`;

export const ContactFormLabel = styled.label`
margin-top: ${p => p.theme.spasing(4)};
display: flex;
flex-direction: column;
`;

export const ContactFormField = styled(Field)`
  width: 50%; 
  border-radius: 8px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.Indigo};  
  margin-bottom: ${p => p.theme.spasing(1)};
  padding:${p => p.theme.spasing(1)};  
`;

export const ContactFormError = styled(ErrorMessage)`
color: ${p => p.theme.colors.Crimson};
font-size: 16px;
`;

export const ContactFormButton = styled.button`
  width: 150px;
  padding:  ${p => p.theme.spasing(2)}  ${p => p.theme.spasing(2)}; 
  background-color: ${p => p.theme.background.GreenYellow};   
  border-radius: 8px;
  border: none;    
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${p => p.theme.spasing(4)};
  &:hover,
  &:focus {
  background-color: ${p => p.theme.background.blue};  
  margin-right: auto;
  margin-left: auto;
}
   
`;