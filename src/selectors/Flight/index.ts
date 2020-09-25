import { AppState } from "../../store"

export const getFlights = (state: AppState) => {
    return state.flight
}

export const getTotalPage = (state: AppState) => {
    return state.flight.totalPages
}

