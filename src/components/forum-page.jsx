import React from 'react';

import styles from '../styles';
import AnswerSection from './answer-section';

export default class ForumPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answers: [
                { text: 'Yeah...I don\'t either', isMarkedCorrect: false },
                { text: 'Javascript framework, RTFM', isMarkedCorrect: false },
                { text: 'Like reacting to something...or something?', isMarkedCorrect: false }
            ]
        }

        this.appStyle = {
            margin: '16px'
        };

        this.handleNewAnswer = this.handleNewAnswer.bind(this);
    }

    handleNewAnswer(newAnswer) {
        var updatedAnswers = this.state.answers.push(newAnswer);
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
                <p style={styles.robotoFont}>I don't understand React or Flux. Can someone help?</p>
                <div style={styles.spacerMd}></div>
                <AnswerSection
                    answers={this.state.answers}
                    markAnswerCorrect={this.markAnswerCorrect.bind(this)} />
            </div>
        );
    }
}
