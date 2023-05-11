import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsSlice';
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        tickets : ticketsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
