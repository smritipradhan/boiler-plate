import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;

//const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  useSelector
// const handleLogin = () => {
//     dispatch(authActions.login()); dispatch
//   };
