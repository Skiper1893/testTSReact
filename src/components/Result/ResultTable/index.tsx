import React from 'react';
import { ContainerWrapper } from "../../../pages/Result/styles";
import ResultRow from '../ResultRow';
import { ResultsBodyContainer, ResultHeaderContainer } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ResultTable = () => {
    return (
        <ResultsBodyContainer>
            <ContainerWrapper>
                <ResultRow />
                {/*<CircularProgress />*/}
            </ContainerWrapper>
        </ResultsBodyContainer>
    )
}

export default ResultTable;