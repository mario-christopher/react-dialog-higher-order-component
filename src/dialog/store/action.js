export const dialogActions = {
    SHOW_DLG: 'Show Dialog',
    CLOSE_DLG: 'Close Dialog'
}

export const action_ShowDialog = (dialogKey) => {
    return {
        type: dialogActions.SHOW_DLG,
        dialogKey
    };
}

export const action_CloseDialog = (dialogKey) => {
    return {
        type: dialogActions.CLOSE_DLG,
        dialogKey
    };
}