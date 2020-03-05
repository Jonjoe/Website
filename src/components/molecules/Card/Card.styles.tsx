import styled from "styled-components";
import { theme } from "config";

export const Container = styled.article`
  background: rgba(45, 45, 45, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  border: 5px solid ${theme.pallet.BLACK};
  position: relative;
`;

export const Header = styled.header`
  color: ${theme.pallet.WHITE};
  margin-bottom: 25px;
`;

export const Content = styled.section`
  margin-bottom: 25px;
  h6 {
    margin-bottom: 5px;
  }
`;

export const Footer = styled.footer`
  button {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Tags = styled.aside`
  position: absolute;
  top: 0;
  left: -32px;
  > * {
    background: white;
    margin-bottom: 2px;
    padding: 8px 2px;
    border: 5px solid ${theme.pallet.BLACK};
    border-left: none;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;
