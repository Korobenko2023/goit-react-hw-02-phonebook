import styled from 'styled-components';
export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

`;

export const FilterLabel = styled.label`
  margin-top: ${p => p.theme.spasing(4)};  
`;

export const FilterInput = styled.input`
  text-align: center;
  width: 40%; 
  border-radius: 8px;
  outline: none;
  border: none;  
  margin-bottom: ${p => p.theme.spasing(1)};
  padding:${p => p.theme.spasing(2)};  
`;