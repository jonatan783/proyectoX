import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userSlice from './user';
import shoppingCartSlice from './shoppingCart';
import itemCartSlice from './itemCart';
import searchSlice from './searchOrder';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    itemCarts: itemCartSlice,
    searchOrder: searchSlice,
  },
});

export default store;
