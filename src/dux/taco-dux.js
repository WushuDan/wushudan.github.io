import autodux from 'autodux';

export const slice = 'taco';

const initial = {
    retrieving: false,
    error: false,
    taco: null
};

export const { actions = {}, reducer, selectors } = autodux({
    slice,
    initial,
    actions: {
        getTaco: state => ({
            ...state,
            retrieving: true,
            error: false
        }),
        getTacoSuccess: (state, payload) => ({
            retrieving: false,
            error: false,
            taco: payload
        }),
        getTacoError: (state, payload) => ({
            retrieving: false,
            error: payload,
            taco: null
        })
    }
})
