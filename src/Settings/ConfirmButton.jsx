import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'
import { color3, fontSize1, greenBoxShadow } from '../Shared/Styles'

const ConfirmedButtonStyled = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
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
