import React from 'react';
import { connect } from 'react-redux';
import { action_ShowDialog, action_CloseDialog } from './store/action';

export const asDialog = (BodyComponent) => {

    class AsDialog extends React.PureComponent {

        dialogActions = {
            setOk: (okHandler) => { this.onOk = okHandler },
            setCancel: (cancelHandler) => { this.cancel = cancelHandler },
            close: () => {
                this.closeDialog();
            }
        };
        
        showDialog = () => {
            if (this.props.authenticated === false) {
                this.inProgress = true;
                this.props.dispatch(action_ShowDialog(this.props.loginDialogKey));
            }
            else
                this.props.dispatch(action_ShowDialog(BodyComponent.displayName));
        }

        closeDialog = () => {
            this.props.dispatch(action_CloseDialog(BodyComponent.displayName));
        }

        handleOk = () => {
            if (this.onOk)
                this.onOk();
            else
                this.closeDialog();
        }

        handleCancel = () => {
            if (this.onCancel)
                this.onCancel();
            else
                this.closeDialog();
        }

        render = () => {
            let visible;
            if (this.props.openDialogs) {
                visible = (this.props.openDialogs.filter(dialog => dialog === BodyComponent.displayName).length > 0);
            }

            let options = this.props.options || {};

            return (
                <span>
                    {options.prompt && options.prompt(this.showDialog, this.closeDialog)}

                    {visible &&
                        <div>
                            <div className="modal-backdrop fade in modal-back-drop"></div>
                            <div className={`modal-dlg ${options.modalClass} _col`}>

                                <div className='modal-header'>
                                    {options.header}
                                    <span className="close" title="Cancel" onClick={() => this.handleCancel()}>&times;</span>
                                </div>

                                <div className='modal-body _stretch'>
                                    <BodyComponent  {...this.props} dialogActions={this.dialogActions} />
                                </div>

                                <div className='modal-footer _row'>
                                    <span className='_stretch' />
                                    <button className='btn btn-success' onClick={() => this.handleOk()} title='Ok'><span className='glyphicon glyphicon-ok' /></button>
                                    {options.showCancel && <button className='btn btn-danger' onClick={() => this.handleCancel()} title='Cancel'><span className='glyphicon glyphicon-remove' /></button>}
                                </div>

                            </div>
                        </div>
                    }
                </span>
            );
        };
    }
    AsDialog.displayName = `AsDialog(${BodyComponent.displayName || 'Component'})`;

    AsDialog = connect((state) => {
        return {
            openDialogs: state.dialogs.ui.openDialogs
        }
    })(AsDialog);

    return AsDialog;
}