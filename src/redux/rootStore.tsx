// common
import { combineReducers } from 'redux';
// store
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// authorization
import signInReducer from './reducers/authorization/signIn/signInReducer';
// media
import mediaPlayInfoReducer from './reducers/media/mediaPlayInfo/mediaPlayInfoReducer';
import mediaListReducer from './reducers/media/mediaList/mediaListReducer';


export const rootReducer = combineReducers({
    signIn: signInReducer,
    mediaList: mediaListReducer,
    mediaPlayInfo: mediaPlayInfoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));

export type RootState = ReturnType<typeof rootReducer>