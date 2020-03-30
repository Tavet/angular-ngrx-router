import { PostService } from './../../services/post.service';
import { GetPost, EPostActions, GetPostSuccess } from './../actions/post.actions';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {

    @Effect()
    getPost$ = this.actions$.pipe(
        ofType<GetPost>(EPostActions.GetPostAction),
        switchMap(action => this.postService.getPostByAuthor(action.author)),
        switchMap(response => {
            return of(new GetPostSuccess(response));
        })
    );

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }
}