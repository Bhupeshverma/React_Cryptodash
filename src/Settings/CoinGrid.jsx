import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';


const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`
function getLowerSectionCoins(coinList, filteredCoins) {
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100)
}

function getCoinList(coinList, topSection, favourites, filterCoins) {
    return topSection ?
    favourites :
    getLowerSectionCoins(coinList,filterCoins)
}

export default function({topSection}) {
    return (
        <AppContext.Consumer>
            {({coinList, favourites, filteredCoins}) => (<CoinGridStyled>
                {getCoinList(coinList, topSection, favourites, filteredCoins).map(coinKey => 
                    <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
                )}
                </CoinGridStyled>)}
        </AppContext.Consumer>
    )
}