import React from 'react';
import { ReactComponent as SearchButton } from '../../assets/search.svg';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import InputContainer from './InputContainer';

/**
 * simple text input field with search icon
 */

interface StyledSearchFieldProps {
  size: keyof Size;
}

type Size = { small: string; regular: string };
type Justify = { fluid: string; default: string };

const StyledSearchField = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 15px;
  height: ${(props: StyledSearchFieldProps): string => {
    const styles: Size = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  &:focus {
    outline: 2px solid black;
  }
`;

interface IconContainerProps {
  size: keyof Size;
}

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: ${(props: IconContainerProps): string => {
    const styles = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  cursor: pointer;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 1.5rem;
  border-style: none;
  outline: none;
`;

interface SearchFieldProps {
  type: string;
  placeholder: string;
  size?: keyof Size;
  justify?: keyof Justify;
  required: boolean;
  handleClick: () => void;
}

function SearchField({
  type,
  placeholder,
  required,
  //justify = 'default',
  handleClick,
  size = 'regular',
}: SearchFieldProps) {
  const dispatch = useDispatch();

  return (
    <InputContainer>
      <StyledSearchField size={size} tabIndex={1}>
        <IconContainer size={size} onClick={() => dispatch(handleClick())}>
          <SearchButton />
        </IconContainer>
        <InputField type={type} placeholder={placeholder} required={required} />
      </StyledSearchField>
    </InputContainer>
  );
}

export default SearchField;
