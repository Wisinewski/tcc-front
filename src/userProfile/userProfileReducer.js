const INITIAL_STATE = {summary: [[{nome: '', tipo_pet: ''}], {nome: '', email: ''}]}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INFO_PROFILE_FETCHED':
            return { ...state, summary: action.payload }
        default:
            return state
    }
}