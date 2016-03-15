import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import ForumPage from './components/forum-page';

class App extends React.Component {

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

export default App;
