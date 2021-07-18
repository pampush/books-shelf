import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SelectPopup from '../components/searchForm/SelectFieldComponents/SelectPopup';

describe('SelectPopup', () => {
  const props = {
    items: ['History', 'Art'],
    open: false,
    className: '',
    onClose: jest.fn(),
    handleSelect: jest.fn(),
  };

  test('component doesn"t render datalist', () => {
    const component = render(<SelectPopup {...props} />);
    expect(component.queryByText(/History/i)).toBeNull();
  });

  test('component renders datalist', () => {
    const component = render(<SelectPopup {...props} open={true} />);
    expect(component.queryByText(/History/i)).toBeInTheDocument();
  });
});
