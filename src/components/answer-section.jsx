import React from 'react';
import * as _ from 'lodash';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CheckIcon from 'material-ui/lib/svg-icons/navigation/check';
import * as Colors from 'material-ui/lib/styles/colors';

import styles from '../styles';
import { markAnswerCorrect } from '../actions/forum-actions';

export default class AnswerSection extends React.Component {

    static propTypes = {
        answers: React.PropTypes.array.isRequired
    }

    handleAnswerTap(answer) {
        markAnswerCorrect(answer.id);
    }

    render() {
        var answers = [];
        var iconStyle = {
            fill: Colors.green500
        };
        if (this.props.answers.length === 0) {
            answers.push(
                <p key={_.uniqueId('no_answer_')} style={styles.robotoFont}>
                    There are no answers for this question yet. Use the answer bar to turn in a new answer.
                </p>
            );
        }
        else {
            _.forEach(this.props.answers, (ans) => {
                var answerToPush;
                if (ans.isMarkedCorrect) {
                    answerToPush = <ListItem
                        key={_.uniqueId('answer_')}
                        primaryText={ans.text}
                        secondaryText="This answer is marked correct."
                        rightIcon={<CheckIcon style={iconStyle} />} />
                }
                else {
                    answerToPush = <ListItem
                        key={_.uniqueId('answer_')}
                        primaryText={ans.text}
                        onTouchTap={this.handleAnswerTap.bind(this, ans)}/>
                }
                answers.push(answerToPush);
                answers.push(<Divider key={_.uniqueId('divider_')} />);
            });
        }

        return (
            <div>
                <Card>
                    <CardHeader
                        title="Answers" />
                    <CardText>
                        <List>
                            {answers}
                        </List>
                    </CardText>
                </Card>
            </div>
        )
    }
}
