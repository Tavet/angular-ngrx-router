import { IPost } from './../../../shared/models/post/post.interface';
import { Action } from '@ngrx/store';

export enum EPostActions {
    GetPostAction = '[Post] Get Post',
    GetPostSuccessAction = '[Post] Get Post Success',
}
export class GetPost implements Action {
    public readonly type = EPostActions.GetPostAction;
    constructor(public author: string) {
    }
}

export class GetPostSuccess implements Action {
    public readonly type = EPostActions.GetPostSuccessAction;
    constructor(public payload: IPost) { }
}

export type PostActions = GetPost | GetPostSuccess