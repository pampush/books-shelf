import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import DatalistSelectField from '../components/searchForm/DatalistSelectField';

// const renderWithProvider = (children: JSX.Element) => {
//   const store = createStore(rootReducer, init);
//   return render(<Provider store={store}>{children}</Provider>);
// };

interface Props {
  value: string;
  placeholder: string;
  label: string;
  name: string;
  options: Array<string>;
  onChange: () => void;
  handleSelect: () => void;
}

describe('DataListSelectField', () => {
  const props: Props = {
    value: '',
    placeholder: 'test',
    label: 'test',
    name: 'test',
    options: ['History', 'Art'],
    onChange: jest.fn(),
    handleSelect: jest.fn(),
  };

  test('The down arrow button is replaced by the up arrow button on click', () => {
    const component = render(<DatalistSelectField {...props} />);

    expect(component.queryByText(/down-arrow.svg/i)).toBeInTheDocument();
    userEvent.click(component.queryByText(/down-arrow.svg/i) as Element);
    expect(component.queryByText(/up-arrow.svg/i)).toBeInTheDocument();
  });

  test('Click on the bottom arrow button reveals list  of options', () => {
    const component = render(<DatalistSelectField {...props} />);

    expect(component.queryByText(/History/i)).toBeNull();
    userEvent.click(component.container.querySelector('span') as Element);
    expect(component.queryByText(/History/i)).toBeInTheDocument();
  });
});
