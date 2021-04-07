export const FILTER_BY_ALL = "FILTER_BY_ALL"
export const FILTER_BY_COMPLETED = "FILTER_BY_COMPLETED"
export const FILTER_BY_UNCOMPLETED = "FILTER_BY_UNCOMPLETED"

export const filterByAllActionCreator = () => ({
    type: FILTER_BY_ALL,
});

export const filterByCompletedActionCreator = () => ({
    type: FILTER_BY_COMPLETED,
});

export const filterByUncompletedActionCreator = () => ({
    type: FILTER_BY_UNCOMPLETED,
});