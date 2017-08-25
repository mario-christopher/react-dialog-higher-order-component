import React from 'react';
import { asDialog } from '../dialog/dialog';

export class About extends React.PureComponent {

    render() {
        return (
            <div>
                <p>This is a simple Dialog HOC that can be used to display any content inside a Modal Dialog.</p>
                <p>It can be fully customized.</p>
                <br /><br />
            </div>
        );
    };
}

About.displayName = 'About';

About = asDialog(About);