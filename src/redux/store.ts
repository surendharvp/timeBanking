import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import skillsReducer from './slices/skillsSlice';
import transactionsReducer from './slices/transactionsSlice';
import notificationsReducer from './slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    skills: skillsReducer,
    transactions: transactionsReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;