import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const ContactFormForm = styled(Form)`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const ContactFormLabel = styled.label`
margin-top: ${p => p.theme.spasing(4)};
 
`;

export const ContactFormField = styled(Field)`
  text-align: center;
  width: 40%; 
  border-radius: 8px;
  outline: none;
  border: none;  
  margin-bottom: ${p => p.theme.spasing(1)};
  padding:${p => p.theme.spasing(2)};  
`;

export const ContactFormError = styled(ErrorMessage)`
color: ${p => p.theme.colors.Crimson};
font-size: 16px;
`;

export const ContactFormButton = styled.button`
  padding:  ${p => p.theme.spasing(2)}  ${p => p.theme.spasing(2)}; 
  background-color: ${p => p.theme.background.GreenYellow};   
  border-radius: 8px;
  border: none;    
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${p => p.theme.spasing(4)};
  &:hover {
  background-color: ${p => p.theme.background.blue};  
}
   
`;