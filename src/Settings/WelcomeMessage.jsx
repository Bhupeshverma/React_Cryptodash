import React from 'react';
import { AppContext } from '../app/AppProvider';


export default function({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) => firstVisit ? <div>
                Welcome to Cryptodash. please select your favourite coins to begin. {' '}
            </div>: null}
        </AppContext.Consumer>
    )
}
