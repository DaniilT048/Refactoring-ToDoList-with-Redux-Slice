import {configureStore} from "@reduxjs/toolkit";
import toDoSlice from './toDoSlice.ts'

export const store = configureStore({
    reducer: {
        todo: toDoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;