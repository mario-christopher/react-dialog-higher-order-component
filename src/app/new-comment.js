import React from 'react';

import { asDialog } from '../dialog/dialog';

export class NewComment extends React.PureComponent {

    componentDidMount = () => {
        if (this.props.dialogActions)
            this.props.dialogActions.setOk(this.onOk);
    }

    onOk = () => {
        if (this.input.value.length > 0) {
            let newComment = this.input.value;
            if (this.props.dialogActions)
                this.props.dialogActions.close();
            alert('Your comment : ' + newComment);
            console.log('Your comment : ' + newComment);
        }
    }

    render() {
        return (
            <span>
                <input autoFocus ref={(elem) => this.input = elem} className='form-control' />
            </span>
        );
    };
}

NewComment.displayName = 'New Comment';

NewComment = asDialog(NewComment);