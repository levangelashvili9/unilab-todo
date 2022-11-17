import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import todosReducer from "./slices/todosSlice";
import loginReducer from "./slices/loginSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: todosReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
