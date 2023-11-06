import styled from 'styled-components';
export const ContactItemLi = styled.li`
  text-align: center; 
`;

export const ContactItemButton = styled.button`
  padding: ${p => p.theme.spasing(1)}  ${p => p.theme.spasing(1)}; 
  background-color: ${p => p.theme.background.Tomato};   
  border-radius: 8px;
  border: none;    
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: ${p => p.theme.spasing(4)};
  &:hover {
  background-color: ${p => p.theme.background.blue};  
}   
`;