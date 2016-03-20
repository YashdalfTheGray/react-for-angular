import * as _ from 'lodash';
import { EventEmitter } from 'events';

import { forumDispatcher } from '../app';
import { ACTION_NEW_ANSWER, ACTION_MARKED_CORRECT } from '../constants';

export default class AnswersStore extends EventEmitter {

    constructor() {
        super();
        this.answers = [
            {
                id: _.uniqueId('answer_'),
                text: 'React is a Javascript framework.',
                isMarkedCorrect: false,
            },
            {
                id: _.uniqueId('answer_'),
                text: 'React is a lightweight framework that particularly excels at the V part of MVC.',
                isMarkedCorrect: false,
            }
        ];

        forumDispatcher.register(action => {
            switch (action.actionType) {
                case ACTION_NEW_ANSWER:
                    this.addNewAnswer(action.text);
                    this.emit(ACTION_NEW_ANSWER);
                    break;
                case ACTION_MARKED_CORRECT:
                    this.markAnswerCorrect(action.id);
                    this.emit(ACTION_MARKED_CORRECT);
                    break;
                default:
                    console.log('No supporting handler found');
            }
        });
    }

    getAnswers() {
        return this.answers;
    }

    addNewAnswer(newAnswerText) {
        this.answers.push({
            id: _.uniqueId('answer_'),
            text: newAnswerText,
            isMarkedCorrect: false
        });
    }

    markAnswerCorrect(answerId) {
        _.forEach(this.answers, (answer) => {
            answer.isMarkedCorrect = false;
        });
        this.answers[_.findIndex(this.answers, ['id', answerId])].isMarkedCorrect = true;
    }
}
