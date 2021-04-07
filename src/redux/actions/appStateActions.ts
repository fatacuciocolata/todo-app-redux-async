export const START_LOADING = "START_LOADING"
export const STOP_LOADING = "STOP_LOADING"

export const startLoadingActionCreator = () => ({
    type: START_LOADING,
});

export const stopLoadingActionCreator = () => ({
    type: STOP_LOADING,
});
