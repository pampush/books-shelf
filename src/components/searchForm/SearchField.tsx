import React from 'react';
import { ReactComponent as SearchButton } from '../../assets/search.svg';
import styled from 'styled-components';

import InputContainer from './InputContainer';
import { Size } from './types';

/**
 * simple text input field with search icon
 */

interface StyledSearchFieldProps {
  size: keyof Size;
}

const StyledSearchField = styled.div<StyledSearchFieldProps>`
  display: flex;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 1rem -0.5rem;
  height: ${(props): string => {
    const styles: Size = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  &:focus {
    outline: 2px solid black;
  }
`;

interface IconContainerProps {
  size: keyof Size;
  disable: boolean;
}

const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: ${(props): string => {
    const styles = { small: '4rem', regular: '6rem' };
    return styles[props.size];
  }};
  cursor: pointer;
  pointer-events: ${(props): string => (props.disable ? 'none' : '')};
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
  required: boolean;
  name: string;
  value: string;
  onChange: (text: string) => void;
  handleSubmit: (text: string) => void;
  disable: boolean;
}

function SearchField({
  type,
  placeholder,
  required,
  size = 'regular',
  value = '',
  onChange,
  name = '',
  handleSubmit,
  disable,
}: SearchFieldProps) {
  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement> | globalThis.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      if (disable) return; // prevent unstoppable submitting
      event.preventDefault();
      handleSubmit(value);
    }
  };

  return (
    <InputContainer>
      <StyledSearchField size={size} tabIndex={1}>
        <IconContainer size={size} onClick={() => handleSubmit(value)} disable={disable}>
          <SearchButton />
        </IconContainer>
        <InputField
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          onKeyDown={keyHandler}
        />
      </StyledSearchField>
    </InputContainer>
  );
}

export default SearchField;
