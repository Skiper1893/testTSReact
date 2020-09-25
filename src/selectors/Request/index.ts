import {AppState} from "../../store";

export const getCurrentPage = (state: AppState) => {
    return state.requestOptions.page
}
