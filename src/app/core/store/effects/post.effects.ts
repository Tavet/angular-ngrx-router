import { PostService } from './../../services/post.service';
import { GetPostSuccess } from './../actions/post.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofRoute } from 'ngrx-router';
import { mapToParam } from 'src/app/shared/pipes/operator';

@Injectable()
export class PostEffects {

    @Effect()
    postRouted$ = this.actions$.pipe(
        ofRoute('dashboard/post/:author'),
        mapToParam<string>('author'),
        switchMap(author => {
            return this.postService.getPostByAuthor(author)
        }),
        switchMap(response => {
            return of(new GetPostSuccess(response));
        })
    );

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }
}