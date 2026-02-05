import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Section = styled.section`
  padding: 5rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints?.tablet || '768px'}) {
    padding: 3rem 0;
  }
`;
