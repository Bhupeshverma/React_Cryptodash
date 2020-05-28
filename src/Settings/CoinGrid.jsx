import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { Tile, SelectableTile } from '../Shared/Tile';
import CoinTile from './CoinTile';


const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`
function getCoinList(coinList, topSection, favourites) {
    return topSection ?
    favourites :
    Object.keys(coinList).slice(0,  100)
}

export default function({topSection, favourites}) {
    return (
        <AppContext.Consumer>
            {({coinList, favourites}) => <CoinGridStyled>
                {getCoinList(coinList, topSection, favourites).map(coinKey => 
                    <CoinTile coinKey={coinKey} topSection={topSection} />
                )}
                </CoinGridStyled>}
        </AppContext.Consumer>
    )
}