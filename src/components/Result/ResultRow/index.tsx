import React from 'react';
import {
    ResultRowContainer,
    FlightContainer,
    Border,
    DescriptionContainer,
    DepartureContainer,
    ResultRowContainerWrapper,
    PriceContainer,
    Price,
    DescriptionWrapper,
    PriceBorder
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'


const ResultRow = (props: any) => {
    return (
        <ResultRowContainerWrapper>
            <PriceContainer>
                <h3>Price:</h3>
                <Price>140</Price>
            </PriceContainer>
            <PriceBorder />
            <FlightContainer>
                <DescriptionContainer>
                    <DepartureContainer>
                        <DescriptionWrapper>
                            <h3>7:40</h3>
                            <span>09/25/20</span>
                        </DescriptionWrapper>
                        <DescriptionWrapper>
                            <h4>Kyiv</h4>
                            <span>(AAA)</span>
                        </DescriptionWrapper>
                    </DepartureContainer>
                    <FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltRight}/>
                    <DepartureContainer>
                        <DescriptionWrapper>
                            <h3>9:40</h3>
                            <span>09/25/20</span>
                        </DescriptionWrapper>
                        <DescriptionWrapper>
                            <h4>Dnepr</h4>
                            <span>(AAA)</span>
                        </DescriptionWrapper>
                    </DepartureContainer>
                </DescriptionContainer>
                <Border/>
                <DescriptionContainer>
                    <DepartureContainer>
                        <DescriptionWrapper>
                            <h3>9:40</h3>
                            <span>09/25/20</span>
                        </DescriptionWrapper>
                        <DescriptionWrapper>
                            <h4>Dnepr</h4>
                            <span>(AAA)</span>
                        </DescriptionWrapper>
                    </DepartureContainer>
                    <FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltLeft}/>
                    <DepartureContainer>
                        <DescriptionWrapper>
                            <h3>7:40</h3>
                            <span>09/25/20</span>
                        </DescriptionWrapper>
                        <DescriptionWrapper>
                            <h4>Kyiv</h4>
                            <span>(AAA)</span>
                        </DescriptionWrapper>
                    </DepartureContainer>
                </DescriptionContainer>
            </FlightContainer>
        </ResultRowContainerWrapper>
    )
}

export default ResultRow;