import styled from 'styled-components';
export const AppContainer = styled.div`
  width: 1000px;
  margin-left: auto ;
  margin-right:auto;
  margin-top: ${p => p.theme.spasing(10)};
  margin-bottom: ${p => p.theme.spasing(10)};
  text-align: center;
  border-radius: ${p => p.theme.radii.md};  
  padding: ${p => p.theme.spasing(4)};
  background-color: ${p => p.theme.background.lightBlue};
  border: 0.5px solid ${p => p.theme.background.violet};   
`;

export const AppTitleContact = styled.h2`
margin-top: ${p => p.theme.spasing(6)};
`;