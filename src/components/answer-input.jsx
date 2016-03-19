import React from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import SubmitIcon from 'material-ui/lib/svg-icons/content/send';

import styles from '../styles';

export default class AnswerInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    handleChange(event) {
        this.setState({
            answer: event.target.value
        });
    }

    submitAnswer() {
        this.props.onNewAnswer(this.state.answer);
        this.setState({
            answer: ''
        });
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
            </div>
        );
    }
}
