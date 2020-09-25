import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import {SearchBarContainerWrapper} from "./styles";
import {SearchBarContainer} from "../../../pages/Result/styles";
import {fetchFlights} from "../../../store/entities/Flight/Flight.actions";
import {addRequestParam} from "../../../store/entities/Request/Request.actions";
import {AppState} from "../../../store";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from 'moment';

const SearchBar = () => {
    const dispatch = useDispatch();

    const searchRequest = useCallback(() => {
        dispatch(fetchFlights());
    }, [dispatch]);

    useEffect(() => {
        searchRequest()
    }, [searchRequest])

    const handleChanges = (key: string, value: any) => {
        dispatch(addRequestParam(key, value))
    }
    const [selectedDate, setSelectedDate] = React.useState<any>(
        new Date()
    );

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    const params = useSelector((state: AppState) => state.requestOptions);

    return (
        <SearchBarContainer>
            <SearchBarContainerWrapper>
                <TextField id="outlined-basic" label="Departure" variant="outlined" value={params.origin || ''} onChange={(e: any) => handleChanges('origin', e.target.value)}/>
                <TextField id="outlined-basic" label="Destination" variant="outlined" value={params.destination || ''} onChange={(e: any) => handleChanges('destination', e.target.value)}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Leave date"
                        value={selectedDate}
                        onChange={(date: MaterialUiPickersDate) => handleChanges('leaveDate', moment(date).format('YYYY-MM-DD'))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Return date"
                        value={selectedDate}
                        onChange={(date: MaterialUiPickersDate) => handleChanges('returnDate', moment(date).format('YYYY-MM-DD'))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField id="outlined-basic" label="Adults" variant="outlined" value={params.numberOfAdults || ''} onChange={(e: any) => handleChanges('numberOfAdults', e.target.value)}/>
                <TextField id="outlined-basic" label="Children" variant="outlined" value={params.numberOfChildren || ''} onChange={(e: any) => handleChanges('numberOfChildren', e.target.value)}/>
                <Button className="search_btn" variant="contained" color="primary" onClick={() => searchRequest()}>Search</Button>
            </SearchBarContainerWrapper>
        </SearchBarContainer>
    )
}

export default SearchBar;