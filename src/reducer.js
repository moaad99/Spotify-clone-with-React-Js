
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
            };

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists:action.playlists
                }  ; 
            case 'SET_DISCOVER':
                return {
                    ...state,
                    discover_weekly:action.discover_weekly
                }   ;
            default:
                return state;
    }
}