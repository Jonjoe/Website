import * as React from "react";
import * as Styled from "./Card.styles";

import { Text, Icon } from "components";

const Card: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Icon name="github" />
        <Text.Heading4>This is the card title</Text.Heading4>
      </Styled.Header>
      <Styled.Content>
        <Text.Heading5>This is the body title</Text.Heading5>
        <Text.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text.Body>
      </Styled.Content>
      <Styled.Footer>
        <p>Javascript</p>
        <p>Javascript</p>
        <p>Javascript</p>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Card;
