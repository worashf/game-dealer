import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

test('header test', () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Games Deals Finder');
  expect(header).toHaveClass('title');
});
