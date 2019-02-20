
const initialState = {
    lang: 'fr',
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }

    if (action.type === 'AR')
        newState.lang = 'ar'

    if (action.type === 'FR')
        newState.lang = 'fr'

    return newState
}

export default reducer
