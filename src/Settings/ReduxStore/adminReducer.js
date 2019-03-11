
const initialState = {
    admin: false,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }

    // if (action.type === 'AdminON')
    //     newState.admin = true

    // if (action.type === 'AdminOFF')
    //     newState.admin = false

    // return newState

    switch (action.type) {
        case "AdminOFF": {
            newState.admin = false
            return newState
        }
        case 'AdminON': {
            newState.admin = true
            return newState
        }
        default: {
            return newState
        }
    }
}

export default reducer
