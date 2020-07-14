import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > a {
    padding: 10px;

    > svg {
      fill: #ff4d1f;
      margin: 0 5px;
    }
  }
`;
