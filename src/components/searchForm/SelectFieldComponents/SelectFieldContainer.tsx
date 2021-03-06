import styled from 'styled-components';

import { Size } from '../types';

/**
 * Simple custom select
 */

interface SelectFieldContainerProps {
  size: keyof Size;
}

const SelectFieldContainer = styled.div<SelectFieldContainerProps>`
  display: flex;
  border-radius: 1.5rem;
  padding-left: 1rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem -0.2rem #000000;
  height: ${(props): string => {
    const styles: Size = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  width: 100%;
  &:focus {
    outline: 2px solid black;
  }
`;

export default SelectFieldContainer;
