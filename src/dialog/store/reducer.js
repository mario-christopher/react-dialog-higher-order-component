import { dialogActions } from './action';

const initState = {
    ui: {
        openDialogs: []
    }
}

export const dialogReducer = (state = initState, action) => {

    switch (action.type) {

        case (dialogActions.SHOW_DLG):
            {
                let dialogKey = action.dialogKey;
                let openDialogs = [...state.ui.openDialogs];
                if (!openDialogs.filter(dialog => dialog == dialogKey).length > 0) {
                    openDialogs.push(dialogKey)
                    let ui = { ...state.ui, openDialogs };
                    return { ...state, ui };
                }
                return state;
            }

        case (dialogActions.CLOSE_DLG):
            {
                let dialogKey = action.dialogKey;
                let openDialogs = [...state.ui.openDialogs];
                let index = openDialogs.findIndex(dialog => dialog === dialogKey)
                if (index >= 0) {
                    openDialogs.splice(index, 1);
                    let ui = { ...state.ui, openDialogs };
                    return { ...state, ui };
                }
                return state;
            }

        default:
            return state;
    }
}