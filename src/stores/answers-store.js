import * as _ from 'lodash';
import { EventEmitter } from 'events';

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
