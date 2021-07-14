import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDowm } from '../../assets/down-arrow.svg';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';

import InputContainer from './InputContainer';
import Label from './SelectFieldsComponents/SelectLabel';
import SelectFieldContainer from './SelectFieldsComponents/SelectFieldContainer';
import SelectPopup from './SelectFieldsComponents/SelectPopup';
import IconContainer from './IconContainer';

/**
 * Custom input-datalist element. The elements can be resized, position
 */

type Size = { small: string; regular: string };

interface DatalistSelectFieldProps {
  label: string;
  options: string[];
  placeholder: string;
  size?: keyof Size;
}

const OptionsFilter = styled.input`
  width: 100%;
  border-style: none;
  border-radius: 1.5rem;
  outline: none;
`;

function DatalistSelectField({
  placeholder,
  label,
  options,
  size = 'regular',
}: DatalistSelectFieldProps) {
  const [openList, setOpenList] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<string>(placeholder);
  const [filterText, setFilterText] = React.useState<string>('');

  return (
    <InputContainer>
      <Label selected={Boolean(selectedItem)} opened={openList}>
        {label}
      </Label>
      <SelectFieldContainer tabIndex={2} size={size} onClick={() => setOpenList(true)}>
        <SelectPopup
          items={options.filter((item) => item.includes(filterText))}
          className=""
          open={openList}
          onClose={() => setOpenList(false)}
          handleSelect={(item: string) => setSelectedItem(item)}
        />

        {/* <Text>{selectedItem}</Text> */}
        <OptionsFilter
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value);
          }}></OptionsFilter>
        <IconContainer size={size}>{openList ? <ArrowUp /> : <ArrowDowm />}</IconContainer>
      </SelectFieldContainer>
    </InputContainer>
  );
}

export default DatalistSelectField;
