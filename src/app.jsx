import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { Dispatcher } from 'flux';

import ForumPage from './components/forum-page';
import AnswersStore from './stores/answers-store';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <AppBar
                    title="Forum" />
                <ForumPage />
            </div>
        );
    }
}

const forumDispatcher = new Dispatcher();
const answersStore = new AnswersStore();

export { forumDispatcher, answersStore };
