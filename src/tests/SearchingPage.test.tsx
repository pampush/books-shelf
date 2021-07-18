import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import SearchingPage from '../pages/SearchingPage';
import store from '../redux/store';

const renderWithProvider = (children: JSX.Element) => {
  return render(<Provider store={store}>{children}</Provider>);
};

describe('Searching Page', () => {
  beforeEach(() => {
    const intersectionObserverMock = () => ({
      observe: () => null,
      unobserve: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });

  const component = renderWithProvider(<SearchingPage />);

  test('renders h1 header', () => {
    expect(component.getByText(/explore new horizons/i)).toBeInTheDocument();
  });

  test('renders text in search field', () => {
    const component = renderWithProvider(<SearchingPage />);
    const input = component.container.querySelector('input[name="booksearch"]');
    expect(input).toBeInTheDocument();
    userEvent.type(input as Element, 'test');
    expect(input).toHaveValue('test');
  });

  test('renders option in datalist select after typing', () => {
    const component = renderWithProvider(<SearchingPage />);
    const select = component.container.querySelector('[name="searchdatalist"]');

    expect(select).toBeInTheDocument();
    userEvent.type(select as Element, 'random');
    expect(screen.getByDisplayValue(/random/i)).toBeInTheDocument(); // for value field of input

    // clear/ how to generalize this code, make clearing fields after each test&
    userEvent.clear(select as Element);
  });

  test('renders option in datalist textfield select after selection', () => {
    const component = renderWithProvider(<SearchingPage />);
    expect(component.queryByText(/History/i)).toBeNull();

    userEvent.click(component.container.querySelector('.datalist-select-field span') as Element);
    userEvent.click(screen.queryByText(/History/i) as Element);

    expect(component.queryByText(/Art/i)).toBeNull();
    expect(component.getByDisplayValue(/History/)).toBeInTheDocument();
  });
});
