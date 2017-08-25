import React from 'react';

import { About } from './about';
import { NewComment } from './new-comment';

export class App extends React.PureComponent {

    render() {
        return (
            <div>
                <header className='header-bg'>
                    <div className='_row'>
                        <span className='header-title _stretch'>A common purpopse Dialog HigherOrderComponent (HOC)</span>
                    </div>
                </header>

                <content>
                    <About options={
                        {
                            prompt: (showDialog) => <button className='btn btn-warning _spc' onClick={showDialog}>About ...</button>,
                            header: 'About this Dialog HOC',
                            modalClass: 'modal-about',
                            showCancel: false
                        }
                    } />

                    <NewComment dispatch={this.props.dispatch}
                        options={
                            {
                                prompt: (showDialog) => <button className='btn btn-info _spc' onClick={showDialog}>Add comment ...</button>,
                                header: 'Add your comment',
                                modalClass: 'modal-comment',
                                showCancel: true
                            }
                        } />

                </content>
                
            </div>
        );
    };
}