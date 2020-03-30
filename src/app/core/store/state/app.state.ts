import { initialPostState, IPostState } from './post.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    router?: RouterReducerState;
    post: IPostState;
}

export const initialAppState: IAppState = {
    post: initialPostState
}

export function getInitialState(): IAppState {
    return initialAppState;
}