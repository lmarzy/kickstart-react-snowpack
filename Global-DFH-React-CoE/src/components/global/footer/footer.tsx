import React, { FC } from 'react';

import { Container } from '../../layout/container/container';
import { Flex } from '../../layout/flex/flex';

import { StyledFooter } from './footer.styled';

interface FooterProps {
  appName: string;
}

export const Footer: FC<FooterProps> = ({ appName }) => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <Flex justify="flex-end">
          <small>
            &copy; Mars {year} | {appName}
          </small>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
