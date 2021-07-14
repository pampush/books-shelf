import styled from 'styled-components';
import { Justify } from './types';

export const InputContainer = styled.div`
  position: relative;
  padding-top: 2.4rem;
  // color: rgb(118, 118, 118);
  flex-basis: ${(props: InputContainer) => {
    const styles: Justify = { fluid: '100%', default: '', half: '50%' };
    return styles[props.justify];
  }};
  width: ${(props: InputContainer): string => props.widthOfField};
`;

interface InputContainer {
  justify: keyof Justify;
  widthOfField: string;
}

export default InputContainer;
