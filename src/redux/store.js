import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

export const store = createStore(pReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
