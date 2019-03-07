const initState = {
    warna : 'red',
    loading : 'kucing'
}

export default (state=initState,action)=>{
    switch (action.type){
        case 'GETWARNA': 
        return { 
            ...state,loading:false
        }
        default:
        return state
    }
}