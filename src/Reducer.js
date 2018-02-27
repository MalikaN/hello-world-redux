export function showReducer(state={},action){
    switch(action.type){
        case 'show helloworld':
            return action.text
        case 'hide helloworld':
            return action.text
        default:
            return state
        }
}