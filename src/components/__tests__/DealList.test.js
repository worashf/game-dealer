import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import DealList from '../DealList';

describe('test game deal listing', () => {
  render(
    <Provider store={store}>
      <DealList />
    </Provider>,
    { wrapper: BrowserRouter },
  );
  test('check the first game name name should not null', () => {
    const firstGameName = screen.findByText('Tannenberg');
    expect(firstGameName).not.toBeNull();
  });
  test('check the second  game name shout not null', () => {
    const secondGameName = screen.findByText('Silence of the Sleep');
    expect(secondGameName).not.toBeNull();
  });
  test('check the third game name shout not null', () => {
    const thridGameName = screen.findByText('Return To Mysterious Island');
    expect(thridGameName).not.toBeNull();
  });
  test('check the fourth  game name shout not null', () => {
    const fourthGameName = screen.findByText('Tomb Raider: Legend');
    expect(fourthGameName).not.toBeNull();
  });
});
