import { EPostActions } from './../actions/post.actions';
import { initialPostState, IPostState } from './../state/post.state';
import { PostActions } from '../actions/post.actions';

export function postReducer(
    state = initialPostState,
    action: PostActions
): IPostState {
    switch (action.type) {
        case EPostActions.GetPostSuccessAction: {
            return {
                ...state,
                post: action.payload
            };
        }
        default:
            return state;
    }
}