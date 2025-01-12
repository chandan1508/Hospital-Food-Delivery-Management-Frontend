import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Local storage
// import authReducer from "./auth";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Local storage

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//   },
// });

// export const persistor = persistStore(store);
// export default store;
