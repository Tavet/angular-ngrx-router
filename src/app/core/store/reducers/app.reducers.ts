import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { postReducer } from './post.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    post: postReducer
};