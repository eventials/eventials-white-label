import { configs } from 'configs/customizations';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > a {
    padding: 10px;

    > svg {
      fill: ${configs?.second};
      margin: 0 5px;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
    > a {
      margin: 0px;
      > svg {
        padding: 5px;
        margin: 0;
      }
    }
  }
`;
