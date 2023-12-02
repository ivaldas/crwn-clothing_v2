// import { compose, legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
// // import { loggerMiddleware } from './middleware/logger';
// // import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: [ 'cart' ]
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// // const middleWares = [ loggerMiddleware ];
// // const middleWares = [ process.env.NODE_ENV !== 'production' && logger, thunk ].filter(Boolean);
// // const middleWares = [ process.env.NODE_ENV !== 'production' && logger, sagaMiddleware ].filter(Boolean);
const middleWares = [ process.env.NODE_ENV === 'development' && logger ].filter(Boolean);
// // const composedEnhancers = compose(applyMiddleware(...middleWares));
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// // const composeEnhancer =
// // 	(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// // const composedEnhancers = composeEnhancer(applyMiddleware, ...middleWares);

// // export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const store = configureStore({
	reducer: rootReducer,
	// middleware: middleWares
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleWares)
		// {serializableCheck: false}
});
// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);