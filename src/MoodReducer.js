export default function(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.data];
        case 'DELETE':
            const newState = state.filter(s => s.mood != action.data.mood && s.description != action.data.description);
            return newState;
        default:
            return state;
    }
}