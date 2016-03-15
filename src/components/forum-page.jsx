import React from 'react';

import styles from '../styles';

export default class ForumPage extends React.Component {

    constructor(props) {
        super(props);

        this.appStyle = {
            margin: '16px'
        };
    }
    render() {
        return (
            <div style={this.appStyle}>
                <h2 style={styles.robotoFont}>What is React and flux?</h2>
            </div>
        );
    }
}
