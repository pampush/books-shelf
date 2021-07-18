import styled from 'styled-components';

import { Size } from './types';

interface IconContainerProps {
  size: keyof Size;
}

const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-left: auto;
  width: ${(props): string => {
    const styles = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  cursor: pointer;
`;

export default IconContainer;
