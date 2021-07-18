import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDowm } from '../../assets/down-arrow.svg';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';

import InputContainer from './InputContainer';
import Label from './SelectFieldComponents/SelectLabel';
import SelectFieldContainer from './SelectFieldComponents/SelectFieldContainer';
import SelectPopup from './SelectFieldComponents/SelectPopup';
import IconContainer from './IconContainer';

type Size = { small: string; regular: string };

interface DatalistSelectFieldProps {
  value: string;
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  size?: keyof Size;
  onChange: (category: string) => void;
  handleSelect: (category: string) => void;
}

const OptionsFilter = styled.input`
  width: 100%;
  border-style: none;
  border-radius: 1.5rem;
  outline: none;
`;

/**
 * Custom input-datalist element. The elements can be resized, text search was implemented by
 * array prototype functions.
 */
function DatalistSelectField({
  value,
  placeholder,
  label,
  name = '',
  options,
  size = 'regular',
  onChange,
  handleSelect,
}: DatalistSelectFieldProps) {
  const [openList, setOpenList] = React.useState<boolean>(false);

  return (
    <InputContainer>
      <SelectPopup
        items={options.filter((item) => item.includes(value))}
        className=""
        open={openList}
        onClose={() => setOpenList(false)}
        handleSelect={(item: string) => {
          handleSelect(item);
          setOpenList(false);
        }}
      />
      <SelectFieldContainer tabIndex={2} size={size} onClick={() => setOpenList(true)}>
        <Label selected={true} opened={openList}>
          {label}
        </Label>

        <OptionsFilter
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}></OptionsFilter>
        <IconContainer size={size}>{openList ? <ArrowUp /> : <ArrowDowm />}</IconContainer>
      </SelectFieldContainer>
    </InputContainer>
  );
}

export default DatalistSelectField;
