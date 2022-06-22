import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import { reducer as formReduser } from 'redux-form';

import userSlice from './userSlice';
import typeSlice from './typeSlice';
import serviceSlice from './serviceSlice';
import userInfoSlice from './userInfoSlice';
import historySlice from './historySlice';
import BasketSlice from './BasketSlice';
import usersSlice  from './usersSlice';


export const store = configureStore({
    reducer:{
        counterS: counterSlice,
        user: userSlice,
        type: typeSlice,
        service: serviceSlice,
        userInfo: userInfoSlice,
        history: historySlice,
        basket: BasketSlice,
        users: usersSlice,
        form: formReduser,
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    //   }),
})