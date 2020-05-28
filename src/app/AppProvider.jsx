import React from 'react';
import _ from 'lodash';
const cc = require('cryptocompare')
export const AppContext = React.createContext();

const MAC_FAVOURITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favourites: [],
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavourites: this.isInFavourites,
            ...this.savedSettings(),
            confirmedfavourites: this.confirmedfavourites
        }
    }
    
    componentDidMount = () => {
        this.fetchCoins()
    }
    
    fetchCoins = async() => {
        let coinList = (await cc.coinList()).Data
        this.setState({coinList})
    }
    
    addCoin = key => {
        console.log(key);
        
        let favourites = [...this.state.favourites]
        if (favourites.length < MAC_FAVOURITES) {
            favourites.push(key)
            this.setState({favourites})
        }
    }
    
    removeCoin = key => {
        let favourites = [...this.state.favourites]
        this.setState({favourites: _.pull(favourites,key)})
        
    }
    
    isInFavourites = key => _.includes(this.state.favourites, key)
    
    confirmedfavourites = () => {
        console.log('hello');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({favourites: this.state.favourites}))
    }
    
    setPage = page => this.setState({page})
    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))
        
        if (!cryptoDashData) {
           return {page: 'settings', firstVisit: true} 
        }
        let {favourites} = cryptoDashData;
        return {favourites}
    }
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}