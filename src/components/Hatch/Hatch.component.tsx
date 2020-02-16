import * as React from 'react';
import * as Styled from './Hatch.styles';

import { HeroButton, Logo, SocialLinks } from '../';

const Hatch: React.FC = () => {
  const [hatchOpen, setHatchOpen] = React.useState(false);

  return (
    <Styled.Container hidden={hatchOpen}>
      <Styled.Panel position="top" open={hatchOpen}>
        <Logo />
      </Styled.Panel>

      <Styled.ButtonWrapper hidden={hatchOpen}>
        <HeroButton onClick={(): void => setHatchOpen(true)} label="Dive In" />
      </Styled.ButtonWrapper>

      <Styled.Panel position="bottom" open={hatchOpen}>
        <SocialLinks />
      </Styled.Panel>
    </Styled.Container>
  );
};

export default Hatch;
