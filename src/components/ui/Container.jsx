import styled from 'styled-components';

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--spacing-400);

  @media (min-width: 1184px) {
    padding: 0;
  }
`;

export default Container;
