# react-dialog-higher-order-component !
This app demonstrates the concept of an Higher Order Component. It is developed used React and Redux.

## Try it out:
https://react-dialog.herokuapp.com/

---
A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
Concretely, a higher-order component is a function that takes a component and returns a new component. If for e.g., our HOC function is called `asDialog()`, then:

>`export const NewComment = asDialog(NewComment);;`

## Setup
* `git https://github.com/mario-christopher/hello-world-react.git`
* `cd hello-world-react`
* `npm install`
* `npm run start`
* Browse to http://localhost:8080 *( tested on Chrome and IE.11 ).*

## Usage

The HOC described in this repository is for a general purpse Modal Dialog. It is declared as a class `AsDialog` in React:

    class AsDialog extends React.PureComponent {

        dialogActions = {
            setOk: (okHandler) => { this.onOk = okHandler },
            setCancel: (cancelHandler) => { this.cancel = cancelHandler },
            close: () => {
                this.closeDialog();
            }
        };
        :
        :
    }

The class exposes a `dialogActions` object which is injected into a client's props, and can be used (usually in its `componentDidMount()` method.


    class NewComment extends React.PureComponent {

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
    }

Any regular React class is transformed into a Dialog HOC like this:

>`export const NewComment = asDialog(NewComment);;`

This `NewComment` can now be placed in a target to be shown as a button or any ui element.

    <NewComment dispatch={this.props.dispatch}
        options={
            {
                prompt: (show, close) => <button className='btn btn-info _spc' onClick={show}>Add comment ...</button>,
                header: 'Add your comment',
                modalClass: 'modal-comment',
                showCancel: true
            }
        } />

The props `options` has the following properties:
* `prompt` : *this is a function which provides 2 parameters to show and close the dialog. The function returns the UI element that will be shown on the screen. In this case, a button, clicking which the Dialog is launched.*
* `header` : *this property set the header for the dialog.*
* `modalClass` : *a CSS class defining the look of the dialog*
* `showCancel` : *a boolean which determines if the dialog has a Cancel button.*

---

The above `asDialog()` HOC has been used in another project on my GitHub account : 
[my-favorite-cartoons](https://github.com/mario-christopher/my-favorite-cartoons)

Further reading : [Higher Order Components](https://facebook.github.io/react/docs/higher-order-components.html)


---

##   License

Shared under MIT License.