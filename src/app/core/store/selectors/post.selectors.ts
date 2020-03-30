import { IPostState } from './../state/post.state';
import { IPost } from './../../../shared/models/post/post.interface';
import { IAppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';

const postState = (state: IAppState) => state.post;

export const selectPost = createSelector(
    postState,
    (state: IPostState) => state.post
);
