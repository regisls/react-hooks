export function NumberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
        case 'numberMultiplica7':
            return {...state, number: state.number * 7}
        case 'numberDivide25':
            return {...state, number: state.number / 25}
        case 'arredondar':
            return {...state, number: parseInt(state.number)}
        default:
            return state
    }
};