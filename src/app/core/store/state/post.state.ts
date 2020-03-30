import { IPost } from './../../../shared/models/post/post.interface';

export interface IPostState {
    post: IPost
}

export const initialPostState: IPostState = {
    post: null
}