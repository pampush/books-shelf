import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowDowm } from '../../assets/down-arrow.svg';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';
import SelectPopup from './SelectFieldsComponents/SelectPopup';
import Label from './SelectFieldsComponents/SelectLabel';
import SelectFieldContainer from './SelectFieldsComponents/SelectFieldContainer';
import { Size } from './types';
import IconContainer from './IconContainer';
import InputContainer from './InputContainer';

const Text = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

interface SelectFieldProps {
  label: string;
  options: string[];
  size?: keyof Size;
}

/**
 *  simple custom select
 * @param param0 size - union of 'small', 'regular', 'default'
 * @returns
 */
function Select({ label, options, size = 'regular' }: SelectFieldProps) {
  const [optionItems] = React.useState(options);
  const [selectedItem, setSelectedItem] = React.useState<string>('');
  const [openItem, setOpenItems] = React.useState(false);

  return (
    <InputContainer>
      <SelectFieldContainer tabIndex={3} size={size} onClick={() => setOpenItems(true)}>
        <SelectPopup
          items={optionItems}
          className=""
          open={openItem}
          onClose={() => setOpenItems(false)}
          handleSelect={(item: string) => setSelectedItem(item)}
        />

        <Label selected={Boolean(selectedItem)} opened={openItem}>
          {label}
        </Label>
        <Text>{selectedItem}</Text>
        <IconContainer size={size}>{openItem ? <ArrowUp /> : <ArrowDowm />}</IconContainer>
      </SelectFieldContainer>
    </InputContainer>
  );
}

export default Select;
