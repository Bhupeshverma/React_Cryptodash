import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            setPage: this.setPage,
            ...this.savedSettings(),
            confirmedfavourites: this.confirmedfavourites
        }
    }
    
    confirmedfavourites = () => {
        console.log('hello');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptDash', JSON.stringify({test: 'key'}))
    }
    
    setPage = page => this.setState({page})
    savedSettings() {
        let cryptodashData = JSON.parse(localStorage.getItem('cryptoDash'))
        if (!cryptodashData) {
           return {page: 'settings', firstVisit: true} 
        }
        return {}
    }
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}