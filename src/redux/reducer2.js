const initialState = {
    tracks: []
}

const SET_TRACKS = 'SET_TRACKS';


export function setTracks(arr){
    return {
        type: SET_TRACKS,
        payload: arr
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_TRACKS:
            return {...state, tracks: payload}
        default:
            return state;
    }
}