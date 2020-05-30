import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';
import fuzzy from 'fuzzy'
import _ from 'lodash'
const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr
`
const SearchInput = styled.input`
    ${backgroundColor2};
    ${fontSize2};
    color: #1163c9;
    border: 1px solid;
    height: 25px;
    place-self: center left
`
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    let coinSymbols = Object.keys(coinList)
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringToSearch = coinSymbols.concat(coinNames)
    let fuzzyResult = fuzzy.filter(inputValue, allStringToSearch).map(result => result.string)
    let filteredCoin = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName
        return (_.includes(fuzzyResult, symKey) || _.includes(fuzzyResult, coinName))
    })
    setFilteredCoins(filteredCoin)
},500)

function filterCoin(event, setFilteredCoins, coinList) {
    let inputValue = event.target.value
    if (!inputValue) {
        setFilteredCoins(null)
        return
    }
    handleFilter(inputValue,coinList, setFilteredCoins)
}

export default function() {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => 
            <SearchGrid>
                <h2>Search coin here</h2>
                <SearchInput onKeyUp={(e) => filterCoin(e,setFilteredCoins, coinList)} />
            </SearchGrid>
            }
        </AppContext.Consumer>
    )
}