import React from 'react';

import styles from '../styles';
import AnswerSection from './answer-section';
import AnswerInput from './answer-input';
import AnswersStore from '../stores/answers-store';

export default class ForumPage extends React.Component {

    constructor(props) {
        super(props);

        this.answersStoreInstance = new AnswersStore();

        this.state = {
            answers: this.answersStoreInstance.getAnswers()
        }

        this.appStyle = {
            margin: '16px'
        };

        this.handleNewAnswer = this.handleNewAnswer.bind(this);
    }

    handleNewAnswer(newAnswer) {
        var updatedAnswers = this.state.answers;
        updatedAnswers.push({ text: newAnswer, isMarkedCorrect: false });
        this.setState({
            answers: updatedAnswers
        });
    }

    markAnswerCorrect(ans) {
        var updatedAnswers = this.state.answers;
        _.forEach(updatedAnswers, (answer) => {
            answer.isMarkedCorrect = false;
        });
        updatedAnswers[updatedAnswers.indexOf(ans)].isMarkedCorrect = true;
        this.setState({
            answers: updatedAnswers
        });
    }

    render() {
        return (
            <div style={this.appStyle}>
                <h2 style={styles.robotoFont}>What is React and flux?</h2>
                <p style={styles.robotoFont}>I do not understand React or Flux. Can someone help?</p>
                <div style={styles.spacerMd}></div>
                <AnswerInput onNewAnswer={this.handleNewAnswer} />
                <div style={styles.spacerMd}></div>
                <AnswerSection
                    answers={this.state.answers}
                    markAnswerCorrect={this.markAnswerCorrect.bind(this)} />
            </div>
        );
    }
}
