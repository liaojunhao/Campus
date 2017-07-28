import { createStore } from 'redux';
import reducer from './reducers';

export function configStore(initState){
    return createStore(reducer,initState,window.devToolsExtension?window.devToolsExtension():undefined);
}