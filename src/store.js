// create store that will use hotColdReducer 
// to handle any dispathed actions

import {createStore} from 'redux'

import {hotColdReducer} from './reducers';

export default createStore(hotColdReducer);