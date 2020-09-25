import styled from 'styled-components';

export const ResultContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   #pagination: {
     margin: 2em;
   }
`

export const SearchBarContainer = styled(ResultContainer)`
    flex: 0 12%;
    background: #3fa0f7;
`

export const ContainerWrapper = styled(ResultContainer)`
    flex-direction: row;
`