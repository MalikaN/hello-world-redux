export function showReducer(state={},action){
    switch(action.type){
        case 'show_helloworld':
            return {text:'Hello'}
        case 'hide_helloworld':
            return {text:'Jello'}
        default:
            return state
        }
}