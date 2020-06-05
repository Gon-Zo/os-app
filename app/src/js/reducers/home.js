const INPUTACTION = "home/input"

const OUTPUTACTION = "home/output"

export const onInput = () => ({type: INPUTACTION})

export const onOutput = () => ({type: OUTPUTACTION})

const initData = {
    count : 0,
}

const reducer = (state = initData, action) => {
    switch (action.type) {
        case INPUTACTION:
            state.count += 1
            break;
        case OUTPUTACTION:
            state.count -= 1
            break;
    }
    return state;
}

export default reducer

