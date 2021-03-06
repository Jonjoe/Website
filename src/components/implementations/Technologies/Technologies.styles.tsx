import styled from "styled-components";

import { theme, constants} from "config";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: -20px;

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    justify-content: space-between;
  }
`;

export const ItemContainer = styled.div`
  margin: 10px;
  background: ${theme.pallet.WHITE};
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.318s;

  &:hover {
    background: ${theme.pallet.RED};
    cursor: pointer;
    > span {
      color: white;
    }

    svg {
      color: white;
    }
  }

  > span {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: 900;
    transition: all 0.318s;
  }

  svg {
    transition: all 0.318s;
  }

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    width: calc(50% - 20px);  
  }

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    height: 150px;
  }
`;
