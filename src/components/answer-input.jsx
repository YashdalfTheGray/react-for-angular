import React from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import SubmitIcon from 'material-ui/lib/svg-icons/content/send';
import Snackbar from 'material-ui/lib/snackbar';

import styles from '../styles';
import { forumDispatcher } from '../app';
import { ACTION_NEW_ANSWER } from '../constants/forum-constants';

export default class AnswerInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: '',
            validateSnackbarOpen: false
        };

        this.handleValidateRequestClose = this.handleValidateRequestClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    handleChange(event) {
        this.setState({
            answer: event.target.value
        });
    }

    handleValidateRequestClose() {
        this.setState({
            validateSnackbarOpen: false
        })
    }

    submitAnswer() {
        if (this.state.answer !== '') {
            forumDispatcher.dispatch({
                actionType: ACTION_NEW_ANSWER,
                text: this.state.answer
            });
            this.setState({
                answer: ''
            });
        }
        else {
            this.setState({
                validateSnackbarOpen: true
            });
        }
    }

    render() {
        return (
            <div style={styles.flexRow}>
                <TextField
                    style={styles.flexItem}
                    floatingLabelText="Answer"
                    value={this.state.answer}
                    onChange={this.handleChange} />
                <IconButton
                    tooltip="Submit"
                    onTouchTap={this.submitAnswer}>
                    <SubmitIcon />
                </IconButton>
                <Snackbar
                    style={styles.robotoFont}
                    open={this.state.validateSnackbarOpen}
                    message="Cannot submit empty answer."
                    autoHideDuration={3000}
                    onRequestClose={this.handleValidateRequestClose} />
            </div>
        );
    }
}
