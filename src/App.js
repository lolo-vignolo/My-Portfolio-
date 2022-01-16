import React from 'react'
import { Provider } from 'react-redux';

import { store } from './components/store/store';
import { AppRouter } from './routes/AppRouter'
//import { UserContext } from './UserContext'



export const App = () => {

 

  

    return (
        <Provider store = { store } >
           <AppRouter />
        </Provider>
    )
}


