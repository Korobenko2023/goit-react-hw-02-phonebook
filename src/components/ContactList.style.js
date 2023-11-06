import styled from 'styled-components';
export const ContactListUl = styled.ul`    
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;     
  gap: ${p => p.theme.spasing(3)};  
  margin-top: ${p => p.theme.spasing(2)};      
`;