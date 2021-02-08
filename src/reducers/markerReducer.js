import { types } from "../types/types";

export const markerReducer = (state = [], action) => {

    switch (action.type) {
        case types.addMarker:
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }
    
}
