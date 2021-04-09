
export const initialstate={

    user:null,
    playlists:[],
    playing:false,
    item:null
};

export const reducer= (state=initialstate,action)=>{

    console.log(action)


    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
            default:
                return state;
    }
}