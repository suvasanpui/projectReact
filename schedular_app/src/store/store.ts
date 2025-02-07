import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import eventReducer from './eventSlice';

const store = configureStore({
  reducer: {
    title: titleReducer,
    events: eventReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
