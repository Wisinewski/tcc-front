const INITIAL_STATE = {summary: [{nome: ''},{nome: ''},{nome: ''}]}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CUIDADORES_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}