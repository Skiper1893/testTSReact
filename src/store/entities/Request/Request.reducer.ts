import * as TYPES from './Request.types';

export interface RequestInterface {
    origin: string | undefined,
    destination: string | undefined,
    leaveDate: string | undefined,
    returnDate: string | undefined,
    numberOfAdults: number,
    numberOfChildren: number,
    page: number | undefined,
    sortBy?: string
}

const initState: RequestInterface = {
    origin: undefined,
    destination: undefined,
    leaveDate: undefined,
    returnDate: undefined,
    numberOfAdults: 1,
    numberOfChildren: 0,
    page: 1,
    sortBy: undefined,
}

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case TYPES.ADD_REQUEST_PARAM:
            return {
                ...state,
                ...action.payload
        }
        default:
            return state;
    }
}

export default reducer;