import React from 'react';

import styles from '../styles';
import AnswerSection from './answer-section';
import AnswerInput from './answer-input';
import { forumDispatcher, answersStore } from '../app';
import { ACTION_NEW_ANSWER, ACTION_MARKED_CORRECT } from '../constants';

export default class ForumPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answers: answersStore.getAnswers()
        }

        this.appStyle = {
            margin: '16px'
        };

        answersStore.on(ACTION_NEW_ANSWER, () => {
            this.setState({
                answers: answersStore.getAnswers()
            });
        });

        answersStore.on(ACTION_MARKED_CORRECT, () => {
            this.setState({
                answers: answersStore.getAnswers()
            });
        });
    }

    render() {
        return (
            <div style={this.appStyle}>
                <h2 style={styles.robotoFont}>What is React and flux?</h2>
                <p style={styles.robotoFont}>I do not understand React or Flux. Can someone help?</p>
                <div style={styles.spacerMd}></div>
                <AnswerInput />
                <div style={styles.spacerMd}></div>
                <AnswerSection
                    answers={this.state.answers} />
            </div>
        );
    }
}
