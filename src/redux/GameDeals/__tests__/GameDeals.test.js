import { getGameDeals } from '../GameDeals';
import store from '../../configureStore';

describe('test game deals reducer', () => {
  test('fetch game deals', async () => {
    await store.dispatch(getGameDeals());
    expect(store.getState().deals).toBeTruthy();
    expect(store.getState().error).toBeFalsy();
  });
});
