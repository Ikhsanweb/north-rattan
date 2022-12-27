import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistCOnfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
  blacklist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistCOnfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: ['note'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnchancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
