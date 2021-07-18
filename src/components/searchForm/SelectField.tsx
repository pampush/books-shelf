import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowDowm } from '../../assets/down-arrow.svg';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';
import SelectPopup from './SelectFieldComponents/SelectPopup';
import Label from './SelectFieldComponents/SelectLabel';
import SelectFieldContainer from './SelectFieldComponents/SelectFieldContainer';
import { Size } from './types';
import IconContainer from './IconContainer';
import InputContainer from './InputContainer';

const Text = styled.div<{ name: string }>`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

interface SelectFieldProps {
  label: string;
  options: string[];
  size?: keyof Size;
  value: string;
  name: string;
  onChange: (option: string) => void;
}

/**
 *  simple custom select
 * @param param0 size - union of 'small', 'regular', 'default'
 * @returns
 */
function Select({
  label,
  options,
  size = 'regular',
  value,
  onChange,
  name = '',
}: SelectFieldProps) {
  const optionItems = React.useRef<string[]>(options);
  const [openItem, setOpenItems] = React.useState<boolean>(false);

  return (
    <InputContainer>
      <SelectPopup
        items={optionItems.current}
        className=""
        open={openItem}
        onClose={() => setOpenItems(false)}
        handleSelect={(item: string) => {
          onChange(item);
          setOpenItems(false);
        }}
      />
      <SelectFieldContainer tabIndex={3} size={size} onClick={() => setOpenItems(true)}>
        <Label selected={Boolean(value)} opened={openItem}>
          {label}
        </Label>
        <Text name={name}>{value}</Text>
        <IconContainer size={size}>{openItem ? <ArrowUp /> : <ArrowDowm />}</IconContainer>
      </SelectFieldContainer>
    </InputContainer>
  );
}

export default Select;
