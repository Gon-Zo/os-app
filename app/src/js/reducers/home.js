const initData = {
    count : 0,
}

const reducer = (state = initData, action) => {
    switch (action.type) {
        case "1":
            state.count += 1
            break;
        case "2":
            state.count -= 1
            break;
    }
    return state;
}

export default reducer

