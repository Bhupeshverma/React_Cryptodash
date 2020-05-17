import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'

const ConfirmedButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer
`
const CenterDiv = styled.div`
    display: grid;
    justify-content: center
`

export default function() {
    return (
        <AppContext.Consumer>
            {({confirmedfavourites}) => 
                <CenterDiv>
                    <ConfirmedButtonStyled onClick={confirmedfavourites}>
                        Confirm Favorites
                    </ConfirmedButtonStyled >
                </CenterDiv>
            }
        </AppContext.Consumer>
    )
}
