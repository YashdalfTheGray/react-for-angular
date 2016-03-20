import { forumDispatcher } from '../app';
import { ACTION_NEW_ANSWER, ACTION_MARKED_CORRECT } from '../constants/forum-constants';

export function addNewAnswer(answerText) {
    forumDispatcher.dispatch({
        actionType: ACTION_NEW_ANSWER,
        text: answerText
    });
}

export function markAnswerCorrect(id) {
    forumDispatcher.dispatch({
        actionType: ACTION_MARKED_CORRECT,
        id: id
    });
}
