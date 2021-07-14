import styled from 'styled-components';

import { Size } from '../types';

/**
 * Simple custom select
 */

interface SelectFieldContainerProps {
  size: keyof Size;
}

const SelectFieldContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 1.5rem;
  padding-left: 1rem;
  background-color: #ffffff;
  height: ${(props: SelectFieldContainerProps): string => {
    const styles: Size = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  width: 100%;
  &:focus {
    outline: 2px solid black;
  }
`;

export default SelectFieldContainer;
