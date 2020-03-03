import styled from "styled-components";
import { theme } from "config";

import { DynamicTypeProps } from "./Text.component";

function getBaseTypography(props: DynamicTypeProps) {
  const fontWeight: string = props.strong ? "900" : "300";
  const fontColor: string = props.inverted
    ? theme.pallet.WHITE
    : theme.pallet.BLACK;

  const textAlignment: string = props.align ? props.align : "left";

  return `
    font-family: Gilroy;
    padding: 0;
    margin: 0;
    text-align: ${textAlignment};
    font-weight: ${fontWeight};
    color: ${fontColor};
  `;
}

export const Heading1 = styled.h1<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 5.5rem;
  font-weight: 900;
`;

export const Heading2 = styled.h2<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 6rem;
  font-weight: 900;

  &:after {
    content: ".";
    display: "block";
  }
`;

export const Heading3 = styled.h3<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 2rem;
`;

export const Heading4 = styled.h4<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;

export const Heading5 = styled.h5<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}

  font-size: 2.1rem;
  font-weight: 900;
  > strong {
    color: ${theme.pallet.BLUE};
  }
`;

export const Heading6 = styled.h6<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 1.2rem;
  font-weight: 900;
`;

export const Body = styled.p<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  > strong {
    font-weight: 900;
  }
`;