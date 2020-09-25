// @ts-ignore
import * as TYPES from './Flight.types';
import { filterFlightsFetchedData } from '../../../utils/filterFlights';
import {stringify} from 'query-string';
import _ from 'lodash';

const requiredParams = [
    'origin',
    'destination',
    'leaveDate',
    'numberOfAdults',
    'numberOfChildren'
];
export const fetchFlights = () => (dispatch: Function, getState: Function) => {
    const { requestOptions } = getState();
    const toValidate = _.pick(requestOptions, requiredParams);
    const isInvalid = Object.values(toValidate).some(item => !item);
    if(isInvalid) return;
    let query = stringify(requestOptions);
    console.log('-------query--------');
    console.log(query);
    let url = `/getflights?${query}`

    dispatch({
        type: TYPES.GET_FLIGHTS,
        request: {
            method: 'GET',
            url: url,
        },
        meta: {
            getData: (data: any) => {
                if(data) {
                    return {
                        flights: filterFlightsFetchedData(data.legs),
                        totalPages: Math.abs(data.totalPages),
                        totalFlights: Math.abs(data.totalFlights),
                        lastSelectedFlightKey: data.legs[data.legs.length - 1].flightKey || null
                    };
                } else {
                    return null;
                }
            },
        },
    })
}