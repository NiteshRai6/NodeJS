import React from 'react';
import './ReduxPage.css';
import HomeContainer from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer';

const ReduxPage = () => {

    return (
        <div>
            <HeaderContainer />

            <HomeContainer />
        </div>
    );
}
export default ReduxPage;