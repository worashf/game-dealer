import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../../redux/configureStore';
import DealDetail from '../dealDetail';

describe('test game deal', () => {
  test('test detail page', async () => {
    const gameDealId = 1;
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="detail/:1" element={<DealDetail />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => expect(findByText(gameDealId)).not.toBeNull());
  });
});
