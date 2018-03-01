export function showReducer(state={isChangeVal:true},action){
    switch(action.type){
        case 'show_helloworld':
            return {
                text:action.text,
                isChangeVal:false
        
            }
        case 'hide_helloworld':
            return {
                text:action.text,
                isChangeVal:true
            }
        default:
            return state
        }
}